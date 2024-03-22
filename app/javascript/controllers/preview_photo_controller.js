import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="preview-photo"
export default class extends Controller {
  static targets = ["image"]
  preview(event) {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        this.imageTarget.src = event.target.result;
      }
      reader.readAsDataURL(event.currentTarget.files[0])
      this.imageTarget.parentNode.classList.remove("hidden")
      this.imageTarget.parentNode.classList.add("flex")
    }
  }
}
