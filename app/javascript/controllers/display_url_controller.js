import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="display-url"
export default class extends Controller {
  static targets = ["input"]

  showInput(event) {
    if (event.currentTarget.checked) {
      this.inputTarget.classList.remove("hidden")
      this.inputTarget.focus()
    } else {
      this.inputTarget.classList.add("hidden")
      this.inputTarget.value = ""
    }
  }
}
