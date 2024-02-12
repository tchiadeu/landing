import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["realisations", "client"];

  connect() {
    this.realisationsTargets[0].dataset.selected = "true";
  }

  switchClient(event) {
    const index = this.clientTargets.indexOf(event.currentTarget);

    this.realisationsTargets.forEach((realisation, i) => {
      if (i === index) {
        realisation.classList.remove("hidden");
        realisation.classList.add("lg:flex");
        setTimeout(() => {
          realisation.dataset.selected = "true";
        }, 300);
      } else if (realisation.classList.contains("lg:flex")) {
        realisation.dataset.selected = "false";
        setTimeout(() => {
          realisation.classList.remove("lg:flex");
          realisation.classList.add("hidden");
        }, 300);
      }
    });
  }
}
