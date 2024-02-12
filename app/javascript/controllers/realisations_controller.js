import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="realisations"
export default class extends Controller {
  static targets = [ "title", "description", "media", "selectButton", "smartphoneHeader" ]

  connect() {
    this.currentIndex = 0
    this.blockLength = this.titleTarget.querySelectorAll('span').length
    this.selectButtonTargets[this.currentIndex].dataset.active = true
  }

  previousRealisation() {
    this.currentIndex - 1 < 0 ? this.currentIndex = this.blockLength - 1 : this.currentIndex -= 1
    this.updateRealisation()
  }

  nextRealisation() {
    this.currentIndex + 1 >= this.blockLength ? this.currentIndex = 0 : this.currentIndex += 1
    this.updateRealisation()
  }

  selectRealisation(event) {
    const index = this.selectButtonTargets.indexOf(event.currentTarget)
    this.currentIndex = index
    this.updateRealisation()
  }

  updateRealisation() {
    const titles = Array.from(this.titleTarget.querySelectorAll('span'))
    const descriptions = Array.from(this.descriptionTarget.querySelectorAll('span'))
    titles.forEach((title, index) => {
      if (index == this.currentIndex) {
        title.classList.remove('hidden')
      } else {
        title.classList.add('hidden')
      }
    })
    descriptions.forEach((description, index) => {
      if (index == this.currentIndex) {
        description.classList.remove('hidden')
      } else {
        description.classList.add('hidden')
      }
    })
    this.mediaTargets.forEach((media, index) => {
      if (index == this.currentIndex) {
        media.classList.remove('hidden')
      } else {
        media.classList.add('hidden')
      }
    })
    this.selectButtonTargets.forEach((selectButton, index) => {
      if (index == this.currentIndex) {
        selectButton.dataset.active = true
      } else {
        selectButton.dataset.active = false
      }
    })
    if (this.mediaTargets[this.currentIndex].dataset.color === 'black') {
      this.mediaTargets[this.currentIndex].parentNode.classList.add('bg-black')
      this.mediaTargets[this.currentIndex].parentNode.classList.remove('bg-white')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'black').classList.remove('hidden')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'white').classList.add('hidden')
    } else {
      this.mediaTargets[this.currentIndex].parentNode.classList.remove('bg-black')
      this.mediaTargets[this.currentIndex].parentNode.classList.add('bg-white')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'black').classList.add('hidden')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'white').classList.remove('hidden')
    }
  }
}
