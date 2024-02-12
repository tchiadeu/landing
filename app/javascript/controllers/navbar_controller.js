import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "navbar", "button", "section", "input" ]

  connect() {
    this.contactCount = 0
    this.talentCount = 0
  }

  changeSection(event) {
    this.navbarTarget.classList.remove("appear-animation")
    const section = event.currentTarget.getAttribute("data-section")
    this.sectionTarget.classList.remove("appear-animation")
    const contactButton = this.element.querySelector("button[data-section='contact']")
    const logo = this.element.querySelectorAll("button[data-section='agency']")[0]
    this.sectionTargets.forEach((element) => {
      if (section === element.getAttribute("data-section")) {
        element.classList.remove("hidden")
      } else {
        element.classList.add("hidden")
      }
    })
    if (section === "agency" || section === "references") {
      logo.querySelectorAll("div").forEach((div) => {
        div.classList.add("bg-black")
        div.classList.remove("bg-white")
      })
      contactButton.classList.add("border-black")
      contactButton.classList.add("bg-black")
      contactButton.classList.add("hover:bg-gray-700")
      contactButton.classList.add("hover:border-gray-700")
      contactButton.classList.add("text-white")
      contactButton.classList.remove("border-white")
      contactButton.classList.remove("bg-white")
      contactButton.classList.remove("hover:bg-gray-200")
      contactButton.classList.remove("hover:border-gray-200")
      contactButton.classList.remove("text-black")
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
      const talentSection = this.sectionTargets.find((element) => element.getAttribute("data-section") === "talent")
      if (this.talentCount === 0) {
        this.talentCount += 1
        this.resizeSection(talentSection)
      }
      logo.querySelectorAll("div").forEach((div) => {
        div.classList.add("bg-white")
        div.classList.remove("bg-black")
      })
      this.changeColor(contactButton)
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
      const contactSection = this.sectionTargets.find((element) => element.getAttribute("data-section") === "contact")
      if (this.contactCount === 0) {
        this.contactCount += 1
        this.resizeSection(contactSection)
      }
      logo.querySelectorAll("div").forEach((div) => {
        div.classList.add("bg-white")
        div.classList.remove("bg-black")
      })
      this.changeColor(contactButton)
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

  resizeSection(target) {
    const height = target.getBoundingClientRect().height
    const viewportHeight = window.innerHeight
    if (height <= viewportHeight) {
      target.classList.add("h-screen")
    } else {
      target.classList.remove("h-screen")
    }
  }

  changeColor(button) {
    button.classList.remove("border-black")
    button.classList.remove("bg-black")
    button.classList.remove("hover:bg-gray-700")
    button.classList.remove("hover:border-gray-700")
    button.classList.remove("text-white")
    button.classList.add("border-white")
    button.classList.add("bg-white")
    button.classList.add("hover:bg-gray-200")
    button.classList.add("hover:border-gray-200")
    button.classList.add("text-black")
  }
}
