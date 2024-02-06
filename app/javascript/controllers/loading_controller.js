import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loading"
export default class extends Controller {
  static targets = [ "loading", "container", "hero" ]
  connect() {
    setTimeout(() => {
      this.loadingTarget.remove()
      this.containerTarget.classList.remove('relative w-screen h-screen displayed')
      this.heroTarget.classList.remove('absolute')
    }, 6700)
  }
}
