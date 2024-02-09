# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "stimulus-glow", to: "https://cdn.jsdelivr.net/npm/stimulus-glow@0.3.0/dist/stimulus-glow.umd.js"
pin_all_from "app/javascript/controllers", under: "controllers"
