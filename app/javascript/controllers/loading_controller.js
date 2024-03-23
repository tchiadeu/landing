import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loading"
export default class extends Controller {
  connect() {
    const currentUrl = window.location.href
    let interval = setInterval(() => {
      if (parseFloat(window.getComputedStyle(this.element).opacity) === 0) {
        window.location.href = `${currentUrl}agency`
        clearInterval(interval)
      }
    }, 50)
  }
}
