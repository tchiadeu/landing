import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="glow"
export default class extends Controller {
  static targets = ["child", "overlay"]

  initialize() {
    this.move=this.move.bind(this)
  }

  connect() {
    this.overlayTarget.append(this.childTarget.cloneNode(!0)), document.body.addEventListener("pointermove", this.move)
  }

  disconnect() {
    document.body.removeEventListener("pointermove", this.move)
  }

  move(s) {
    const i=s.pageX-this.element.offsetLeft, n=s.pageY-this.element.offsetTop;
    this.element.style.setProperty("--glow-opacity","1"), this.element.style.setProperty("--glow-x",`${i}px`), this.element.style.setProperty("--glow-y",`${n}px`)
  }
}
