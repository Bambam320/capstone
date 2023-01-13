class SpotifyApiController < ApplicationController

  REDIRECT_URI = 'http://localhost:3000/callback'

  def search_for_tracks

    songs = RSpotify::Track.search("#{params[:search]}", limit: 20)
    render json: songs, status: :ok
  end

  def show
    results = RSpotify::Track.search(params[:id], limit: 10)
    if results.length > 0
      render json: results, status: :ok
    else
      render json: { errors: ["Search returned no results"] }, status: :not_found
    end
  end

  def callback
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    puts spotify_user
  end
end


