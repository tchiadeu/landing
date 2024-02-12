import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="references"
export default class extends Controller {
  static targets = [ "realisations" ]

  switchClient(event) {
    const index = parseInt(event.currentTarget.getAttribute('data-index'), 10)
    this.realisationsTargets.forEach((realisation, i) => {
      if (i === index) {
        realisation.classList.remove('hidden')
        realisation.classList.add('lg:flex')
      } else {
        realisation.classList.remove('lg:flex')
        realisation.classList.add('hidden')
      }
    })
  }
}
