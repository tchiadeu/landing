import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loading"
export default class extends Controller {
  static targets = [ "loading", "container", "hero", "talent" ]
  connect() {
    // this.resizeSection()
    setTimeout(() => {
      this.loadingTarget.remove()
      this.containerTarget.classList.remove('relative')
      this.containerTarget.classList.remove('w-screen')
      this.containerTarget.classList.remove('h-screen')
      this.containerTarget.classList.remove('displayed')
      this.heroTarget.classList.remove('absolute')
    }, 10000)
  }
}
