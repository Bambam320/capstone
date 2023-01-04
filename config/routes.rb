Rails.application.routes.draw do
  resources :artists, only: [:index, :show, :create, :update, :destroy]
  resources :albums, only: [:index, :show, :create, :update, :destroy]
  resources :songs, only: [:index, :show, :create, :update, :destroy]
  resources :playlists, only: [:index, :show, :create, :update, :destroy]
  resources :users

  get '/me', to: "sessions#show"
  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "spotify_api/search", to: "spotify_api#search"
  get "spotify_api/audio-analysis", to: "spotify_api#audio_analysis"
  get "spotify_api/recommendations", to: "spotify_api#recommendations"
  get "spotify_api/audio-features", to: "spotify_api#audio_features"
  get "spotify_api/connect", to: "spotify_api#connect"
  get "spotify_api/get_user_token", to: 'spotify_api#get_user_token'
  get "callback", to: "spotify_api#callback"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
