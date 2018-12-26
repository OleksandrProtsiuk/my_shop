Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/payment'
  get 'static_pages/delivery'
  get 'static_pages/about'
  resources :stuffs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
