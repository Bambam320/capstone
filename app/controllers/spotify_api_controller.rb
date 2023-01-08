class SpotifyApiController < ApplicationController

  REDIRECT_URI = 'http://localhost:3000/callback'

  def index
    byebug
      client_id = Rails.application.credentials.spotify[:client_id]
      response_type = 'code'
      scope = 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state'
      url = "https://accounts.spotify.com/authorize?client_id=#{client_id}&redirect_uri=#{REDIRECT_URI}&scope=#{scope}&response_type=#{response_type}"
      render json: { url: url }, status: :ok
  end

end


