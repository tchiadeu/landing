Rails.application.routes.draw do
  devise_for :users

  root 'pages#home'
  get 'contact.vcf', to: 'pages#contact', as: 'contact'

  get 'dashboard', to: 'pages#dashboard'

  resources :talents, only: %i[new create edit update destroy]
  resources :references, only: %i[new create edit update destroy]
end
