# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "https://ga.jspm.io/npm:@hotwired/stimulus@3.2.2/dist/stimulus.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "stimulus-lightbox", to: "https://ga.jspm.io/npm:stimulus-lightbox@3.2.0/dist/stimulus-lightbox.mjs"
pin "lightgallery", to: "https://ga.jspm.io/npm:lightgallery@2.7.2/lightgallery.es5.js"
pin_all_from "app/javascript/controllers", under: "controllers"
