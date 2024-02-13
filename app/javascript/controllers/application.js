import { Application } from "@hotwired/stimulus"
import Lightbox from "stimulus-lightbox"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

Stimulus.register("lightbox", Lightbox)

export { application }
