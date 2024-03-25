import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["radio"]
  static values = { data: String }

  select(event) {
    this.radioTargets.forEach((radio) => {
      const radioSvg = radio.querySelector("svg")
      if (radio === event.currentTarget) {
        radio.classList.add("bg-indigo-600")
        if (radioSvg.classList.contains("stroke-indigo-600")) {
          radioSvg.classList.add("stroke-white")
          radioSvg.classList.remove("stroke-indigo-600")
        } else if (radioSvg.classList.contains("fill-indigo-600")) {
          radioSvg.classList.add("fill-white")
          radioSvg.classList.remove("fill-indigo-600")
        }
      } else {
        radio.classList.remove("bg-indigo-600")
        if (radioSvg.classList.contains("stroke-white")) {
          radioSvg.classList.add("stroke-indigo-600")
          radioSvg.classList.remove("stroke-white")
        } else if (radioSvg.classList.contains("fill-white")) {
          radioSvg.classList.add("fill-indigo-600")
          radioSvg.classList.remove("fill-white")
        }
      }
    })
  }

  change(event) {
    const value = event.currentTarget.value
    const targets = this.element.querySelectorAll("input", `${this.dataValue}`)
    targets.forEach((target) => {
      if (value === "screen" && target.getAttribute("type") === "file" ) {
        target.setAttribute("data-selected", "true")
        Array.from(targets).find((target) => target.getAttribute("type") === "text").setAttribute("data-selected", "false")
      } else if (value === "youtube" && target.getAttribute("type") === "text") {
        target.setAttribute("data-selected", "true")
        Array.from(targets).find((target) => target.getAttribute("type") === "file").setAttribute("data-selected", "false")
        target.placeholder = "Coller le iframe ici"
      } else if (value === "instagram" && target.getAttribute("type") === "text") {
        target.setAttribute("data-selected", "true")
        Array.from(targets).find((target) => target.getAttribute("type") === "file").setAttribute("data-selected", "false")
        target.placeholder = 'Coller le blockquote ici (ne pas cocher "Inclure la légende")'
      }
    })
  }
}
