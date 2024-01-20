Rails.application.routes.draw do
  devise_for :users
  root 'pages#home'
  get 'contact.vcf', to: 'pages#contact', as: 'contact'
  get 'test', to: 'pages#test', as: 'test'
end
