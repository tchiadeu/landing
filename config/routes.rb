Rails.application.routes.draw do
  devise_for :users

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

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
