Rails.application.routes.draw do
  root 'static_pages#home', as: 'root'

  get 'payment', to: 'static_pages#payment', as: 'payment'
  get 'delivery', to: 'static_pages#delivery', as: 'delivery'
  get 'about', to: 'static_pages#about', as: 'about'

  resources :stuffs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
