import { Application } from "@hotwired/stimulus"
// import Glow from 'stimulus-glow'

const application = Application.start()
// application.register('glow', Glow)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
