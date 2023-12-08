import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loading"
export default class extends Controller {
  static targets = [ "loading", "navbar", "hero" ]
  connect() {
    let opacity = 0
    setTimeout(() => {
      this.loadingTarget.remove()
      this.heroTarget.classList.remove('hidden')
      this.navbarTarget.classList.remove('hidden')
      setInterval(() => {
        opacity += 0.1
        this.navbarTarget.style.opacity = opacity
        this.heroTarget.style.opacity = opacity
      }, 50)
    }, 6500)
  }
}
