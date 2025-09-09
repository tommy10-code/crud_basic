Rails.application.routes.draw do
  root "homes#index"

  get "demo/frames", to: "demo#frames"
  post "demo/items", to: "demo#create"

  resources :users, only: [:index, :show]

  get "tests", to: "tests#index"

  get "jts", to: "jts#index"
  resources :tasks

  get "up" => "rails/health#show", as: :rails_health_check

  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
end
