import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "navbar", "button", "section", "input" ]

  changeSection(event) {
    const section = event.currentTarget.getAttribute("data-section")
    this.sectionTargets.forEach((element) => {
      if (section === element.getAttribute("data-section")) {
        element.classList.remove("hidden")
      } else {
        element.classList.add("hidden")
      }
    })
    if (section === "agency" || section === "references") {
      this.navbarTarget.classList.remove("border-gray-900")
      this.navbarTarget.classList.add("border-white")
      this.buttonTargets.forEach((element) => {
        if (element === event.currentTarget) {
          element.classList.remove("border-white")
          element.classList.remove("text-white")
          element.classList.remove("text-gray-300")
          element.classList.remove("text-gray-800")
          element.classList.add("border-2")
          element.classList.add("border-gray-900")
          element.classList.add("text-gray-900")
        } else {
          element.classList.remove("border-2")
          element.classList.remove("text-white")
          element.classList.remove("text-gray-300")
          element.classList.remove("text-gray-900")
          element.classList.add("text-gray-800")
        }
      })
    } else if (section === "talent") {
      this.navbarTarget.classList.remove("border-white")
      this.navbarTarget.classList.add("border-gray-900")
      this.buttonTargets.forEach((element) => {
        if (element === event.currentTarget) {
          element.classList.remove("border-gray-900")
          element.classList.remove("text-gray-800")
          element.classList.remove("text-gray-300")
          element.classList.remove("text-gray-900")
          element.classList.add("border-2")
          element.classList.add("border-white")
          element.classList.add("text-white")
        } else {
          element.classList.remove("border-2")
          element.classList.remove("text-white")
          element.classList.remove("text-gray-800")
          element.classList.remove("text-gray-900")
          element.classList.add("text-gray-300")
        }
      })
    } else {
      this.navbarTarget.classList.remove("border-white")
      this.navbarTarget.classList.add("border-gray-900")
      this.buttonTargets.forEach((element) => {
        element.classList.remove("border-2")
        element.classList.remove("text-white")
        element.classList.remove("text-gray-800")
        element.classList.remove("text-gray-900")
        element.classList.add("text-gray-300")
      })
      this.inputTarget.focus()
    }
  }
}
