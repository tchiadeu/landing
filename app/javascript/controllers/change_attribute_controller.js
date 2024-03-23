import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { data: String }
  connect() {
    this.element.setAttribute(this.dataValue, "true")
  }
  disconnect() {
    this.element.setAttribute(this.dataValue, "false")
  }
}
