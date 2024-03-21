import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="close-alert"
export default class extends Controller {
  close() {
    this.element.remove()
  }
}
