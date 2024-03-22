Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  root 'pages#home'
  post '/send_contact', to: 'pages#send_contact'
  get 'contact.vcf', to: 'pages#contact', as: 'contact'

  namespace :admin do
    resources :sections, only: %i[index edit update]
    resources :talents, only: %i[index new create edit update destroy]
    resources :references do
      resources :tasks
    end
  end
  resources :talents, only: :index
  resources :references, only: :index
  get 'agency', to: 'sections#agency'
  get 'contact', to: 'sections#contact', as: 'contact_section'

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
