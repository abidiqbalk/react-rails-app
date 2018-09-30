Rails.application.routes.draw do
  root to: 'items#index'
  namespace :api do
    namespace :v1 do
      resources :items
    end
  end
end
