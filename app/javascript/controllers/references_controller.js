import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["realisations", "client"];

  connect() {
    this.fadeIn(this.realisationsTargets[0]);
  }

  switchClient(event) {
    const index = this.clientTargets.indexOf(event.currentTarget);

    this.realisationsTargets.forEach((realisation, i) => {
      if (i === index) {
        realisation.classList.remove("hidden");
        realisation.classList.add("lg:flex");
        setTimeout(() => {
          this.fadeIn(realisation);
        }, 400);
      } else if (realisation.classList.contains("lg:flex")) {
        this.fadeOut(realisation);
        setTimeout(() => {
          realisation.classList.remove("lg:flex");
          realisation.classList.add("hidden");
        }, 400);
      }
    });
  }

  fadeIn(element) {
    let opacity = 0;
    const fade = () => {
      opacity += 0.05;
      element.style.opacity = opacity;
      if (opacity < 1) {
        requestAnimationFrame(fade);
      }
    };
    fade();
  }

  fadeOut(element) {
    let opacity = 1;
    const fade = () => {
      opacity -= 0.05;
      element.style.opacity = opacity;
      if (opacity > 0) {
        requestAnimationFrame(fade);
      }
    };
    fade();
  }
}
