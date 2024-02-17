import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="submit"
export default class extends Controller {

  submitForm(event) {
    const fields = Array.from(this.element.querySelectorAll("input, textarea")).filter((field) => !['commit', 'authenticity_token'].includes(field.name))
    let isEmptyField = false
    fields.forEach((field) => {
      if (field.value === "") {
        field.classList.add("border-red-400")
        field.classList.add("border-2")
        field.classList.add("border-solid")
        if (!isEmptyField) {
          field.focus()
        }
        isEmptyField = true
        return
      }
    })
    if (isEmptyField) {
      event.preventDefault()
      this.alert("Veuillez remplir tous les champs")
    } else {
      fields.forEach((field) => {
        field.classList.remove("border-red-400")
        field.classList.remove("border-2")
        field.classList.remove("border-solid")
      })
      fetch("/send_contact",
        {
          method: "POST",
          headers: {
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
            "Accept": "application/json"
          },
          body: new FormData(this.element)
        })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          this.notice(data.message)
          fields.forEach((field) => {
            field.value = ""
          })
        } else {
          this.alert(data.message)
        }
      })
    }
  }

  notice(message) {
    const flash = `<div data-controller="notification" aria-live="assertive" class="mt-10 fixed pointer-events-none inset-0 flex items-end px-4 py-6 sm:p-6 z-10">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
    <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border border-solid border-green-400">
    <div class="p-4"><div class="flex items-center"><div class="flex-shrink-0">
    <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg></div><div class="ml-3 w-0 flex-1 pt-0.5"><p class="text-sm font-medium text-green-500">${message}</p></div>
    <div class="ml-4 flex flex-shrink-0">
    <button data-action="click->notification#removeFlash" type="button" class="inline-flex rounded-md text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
    <span class="sr-only">Close</span>
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg></button></div></div></div></div></div></div>`
    document.body.insertAdjacentHTML("beforeend", flash)
  }

  alert(message) {
    const flash = `<div data-controller="alert" data-alert-target="alert" data-notification="alert" class="fixed hidden bottom-5 w-fit rounded-md bg-yellow-50 p-4 z-10">
    <div class="flex gap-6"><div class="flex-shrink-0"><svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
    </svg></div><div class="ml-3"><p class="text-sm font-medium text-yellow-800">${message}</p></div>
    <div class="ml-auto pl-3"><div class="-mx-1.5 -my-1.5">
    <button type="button" data-action="click->alert#closeAlert" class="inline-flex rounded-md bg-yellow-50 p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50">
    <span class="sr-only">Dismiss</span><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg></button></div></div></div></div>`
    document.body.insertAdjacentHTML("beforeend", flash)
  }
}
