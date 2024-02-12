import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="realisations"
export default class extends Controller {
  static targets = [ "title", "description", "media", "selectButton", "smartphoneHeader" ]

  connect() {
    this.currentIndex = 0
    this.blockLength = this.titleTarget.querySelectorAll('span').length
  }

  previousRealisation() {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.blockLength - 1
    } else {
      this.currentIndex -= 1
    }
    this.updateRealisation(this.currentIndex)
  }

  nextRealisation() {
    if (this.currentIndex + 1 >= this.blockLength) {
      this.currentIndex = 0
    } else {
      this.currentIndex += 1
    }
    this.updateRealisation(this.currentIndex)
  }

  selectRealisation(event) {
    this.currentIndex = event.currentTarget.getAttribute('data-index')
    this.updateRealisation(this.currentIndex)
  }

  updateRealisation(index) {
    const titles = Array.from(this.titleTarget.querySelectorAll('span'))
    const descriptions = Array.from(this.descriptionTarget.querySelectorAll('span'))
    const medias = this.mediaTargets
    const selectButtons = this.selectButtonTargets
    titles.forEach((title, i) => {
      if (i == index) {
        title.classList.remove('hidden')
      } else {
        title.classList.add('hidden')
      }
    })
    descriptions.forEach((description, i) => {
      if (i == index) {
        description.classList.remove('hidden')
      } else {
        description.classList.add('hidden')
      }
    })
    medias.forEach((media, i) => {
      if (i == index) {
        media.classList.remove('hidden')
      } else {
        media.classList.add('hidden')
      }
    })
    selectButtons.forEach((selectButton, i) => {
      if (i == index) {
        selectButton.classList.add('bg-gray-900')
        selectButton.classList.add('text-white')
        selectButton.classList.add('ring-gray-900')
        selectButton.classList.remove('text-gray-900')
        selectButton.classList.remove('hover:bg-gray-100')
        selectButton.classList.remove('ring-gray-300')
      } else {
        selectButton.classList.remove('bg-gray-900')
        selectButton.classList.remove('text-white')
        selectButton.classList.remove('ring-gray-900')
        selectButton.classList.add('text-gray-900')
        selectButton.classList.add('hover:bg-gray-100')
        selectButton.classList.add('ring-gray-300')
      }
    })
    if (this.mediaTargets[index].getAttribute('data-color') === 'black') {
      this.mediaTargets[index].parentNode.classList.add('bg-black')
      this.mediaTargets[index].parentNode.classList.remove('bg-white')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'black').classList.remove('hidden')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'white').classList.add('hidden')
    } else {
      this.mediaTargets[index].parentNode.classList.remove('bg-black')
      this.mediaTargets[index].parentNode.classList.add('bg-white')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'black').classList.add('hidden')
      this.smartphoneHeaderTargets.find((header) => header.getAttribute('data-color') === 'white').classList.remove('hidden')
    }
  }
}
