import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "navbar", "button" ]

  changeColors(event) {
    console.log(this.navbarTarget)
    const currentColor = event.currentTarget.getAttribute('data-color')
    if (currentColor === 'white') {
      this.buttonTargets.forEach((button => {
        button.classList.remove('bg-gray-900')
        button.classList.add('bg-white')
        if (button === event.currentTarget) {
          button.classList.add('text-black')
          button.classList.add('border-gray-900')
          button.classList.add('border-black')
          button.classList.remove('text-gray-900')
          button.classList.remove('hover:bg-gray-700')
          button.classList.remove('hover:bg-gray-300')
          button.classList.remove('hover:text-white')
          button.classList.remove('hover:text-gray-900')
        } else {
          button.classList.remove('border-gray-900')
          button.classList.add('border-white')
          button.classList.add('hover:bg-gray-300')
          button.classList.add('hover:text-gray-900')
        }
      }))
      this.navbarTarget.classList.remove('border-gray-900')
      this.navbarTarget.classList.add('border-white')
    } else {
    }
  }
}
