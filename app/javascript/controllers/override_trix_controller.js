import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="override-trix"
export default class extends Controller {
  connect() {
    const trixContent = this.element.querySelector('.trix-content')
    trixContent.style.lineHeight = '1'
  }
}
