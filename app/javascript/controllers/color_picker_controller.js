import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="color-picker"
export default class extends Controller {
  static targets = ["input", "instruction"]
  async pickColor() {
    this.instructionTarget.classList.remove("hidden")
    let eyeDropper = new EyeDropper()
    let pickedColor = await eyeDropper.open()
    this.inputTarget.value = pickedColor.sRGBHex
    await this.instructionTarget.classList.add("hidden")
  }
}
