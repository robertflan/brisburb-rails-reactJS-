Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
  	namespace :vi do
  		resources :items, only: [:index, :create, :destroy, :update]
  	end
  end
  root to: 'site#index'
end
