Rails.application.routes.draw do
  root 'pages#home'
  get 'contact.vcf', to: 'pages#contact', as: 'contact'
end
