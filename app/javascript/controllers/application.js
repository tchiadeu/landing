import { Application } from "@hotwired/stimulus"
import Lightbox from "stimulus-lightbox"
import NestedForm from 'stimulus-rails-nested-form'

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

Stimulus.register("lightbox", Lightbox)
application.register('nested-form', NestedForm)

export { application }
