Rails.application.routes.draw do
  root "homes#index"
  
  get "demo/frames", to: "demo#frames"
  post "demo/items", to: "demo#create"
  get "tests", to: "tests#index"
  get "jts", to: "jts#index"
  get "burger", to: "burger#index"

  resources :users, only: [:index, :show]
  resources :tasks

  get "up" => "rails/health#show", as: :rails_health_check

  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
end
