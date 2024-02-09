import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="notification"
export default class extends Controller {

  connect() {
    let opacity = 0
    let right = -30
    this.element.style.opacity = 0
    this.element.style.right = "-30px"
    let interval = setInterval(() => {
      this.element.classList.remove("hidden")
      opacity += 0.1
      right += 4
      this.element.style.opacity = opacity
      this.element.style.right = right + "px"
      if (opacity >= 1) clearInterval(interval)
    }, 20)
  }

  removeFlash() {
    let opacity = 1
    let right = 10
    const interval = setInterval(() => {
      opacity -= 0.1
      right -= 4
      this.element.style.opacity = opacity
      this.element.style.right = right + "px"
      if (opacity <= 0) {
        clearInterval(interval)
        this.element.remove()
      }
    }, 20);
  }}
