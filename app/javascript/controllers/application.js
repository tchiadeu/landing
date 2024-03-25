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

import Trix from "trix"
Trix.config.textAttributes.sup = { tagName: "sup", inheritable: true };
Trix.config.textAttributes.sub = { tagName: "sub", inheritable: true };
Trix.config.textAttributes.underline = { tagName: "u", inheritable: false};

document.addEventListener("trix-initialize", function(event) {
  var element = event.target
  var editor = element.editor
  var toolbarElement = element.toolbarElement
  var groupElement = toolbarElement.querySelector(".trix-button-group.trix-button-group--text-tools")

  groupElement.insertAdjacentHTML("beforeend",'<button type="button" class="trix-button trix-button--icon trix-button--icon-underline" data-trix-attribute="underline"><sub>Underline</sub></button>')
  groupElement.insertAdjacentHTML("beforeend", '<button type="button" class="trix-button trix-button--icon trix-button--icon-sup" data-trix-attribute="sup"><sup>Superscript</sup></button>')
  groupElement.insertAdjacentHTML("beforeend",'<button type="button" class="trix-button trix-button--icon trix-button--icon-sub" data-trix-attribute="sub"><sub>Subscript</sub></button>')

  var selectedAttributes = new Set
  function updateSelectedAttributes() {
    selectedAttributes = new Set

    var selectedRange = editor.getSelectedRange()
    if (selectedRange[0] === selectedRange[1]) { selectedRange[1]++ }

    var selectedPieces = editor.getDocument().getDocumentAtRange(selectedRange).getPieces()
    selectedPieces.forEach(function(piece) {
      Object.keys(piece.getAttributes()).forEach(function(attribute) {
        selectedAttributes.add(attribute)
      })
    })
  }

  function enforceExclusiveAttributes() {
    if (editor.attributeIsActive("sup") && selectedAttributes.has("sub")) {
      editor.deactivateAttribute("sub")
      updateSelectedAttributes()
    } else if (editor.attributeIsActive("sub") && selectedAttributes.has("sup")) {
      editor.deactivateAttribute("sup")
      updateSelectedAttributes()
    }
  }

  updateSelectedAttributes()
  element.addEventListener("trix-selection-change", updateSelectedAttributes)
  element.addEventListener("trix-change", enforceExclusiveAttributes)

  if(element.dataset.content){
    editor.insertHTML(element.dataset.content)
  }
})
