import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "area" ]
  initialHeight = 0;

  connect() {
    new ResizeObserver(this.resize.bind(this)).observe(this.areaTarget)
    this.initializeHeightWhenVisible();
  }

  initializeHeightWhenVisible() {
    const checkVisibility = () => {
      if (!this.element.classList.contains("hidden")) {
        this.initialHeight = this.areaTarget.getBoundingClientRect().height;
        clearInterval(visibilityInterval);
      }
    };

    const visibilityInterval = setInterval(checkVisibility, 100);
  }

  resize() {
    const currentHeight = this.areaTarget.getBoundingClientRect().height;

    if (this.initialHeight && currentHeight > this.initialHeight) {
      this.element.classList.remove("h-screen");
      this.element.classList.add("h-fit");
    } else {
      this.element.classList.remove("h-fit");
      this.element.classList.add("h-screen");
    }
  }
}
