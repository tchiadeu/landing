Rails.application.routes.draw do
  devise_for :users

  root 'pages#home'
  post '/send_contact', to: 'pages#send_contact'
  get 'contact.vcf', to: 'pages#contact', as: 'contact'

  get 'dashboard', to: 'pages#dashboard'
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  resources :talents, only: %i[new create edit update destroy]
  resources :references, only: %i[new create edit update destroy]
end
