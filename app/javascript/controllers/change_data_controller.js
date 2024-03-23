import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="change-data"
export default class extends Controller {
  static values = { data: String }
  connect() {
    this.element.setAttribute(this.dataValue, "true")
  }
}
