class PlaylistsController < ApplicationController
  #rescues exceptions when data is not found or invalid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # wraps incoming parameters to let Rails see them
  wrap_parameters format: []
  
  # before_action :set_playlist, only: %i[ show update destroy ]

  # GET /playlists
  def index
    @playlists = Playlist.all

    render json: @playlists
  end

  # GET /playlists/:id
  def show
    playlist = Playlist.find(params[:id])
    render json: playlist, status: :ok
  end

  # POST /playlists
  def create
    user = User.find(session[:user_id])
    playlist = user.playlists.create!(
      user_id: user.id,
      name: "My Playlist ##{user.playlists.count + 1}",
      image: "https://i.scdn.co/image/ab67706c0000bebbe6b65154954d6ce51280884d",
      description: 'My Playlist includes ...',
      spotify_id: '',
      type_of_playlist: 'regular ol\' playlist',
    )
    render json: playlist, status: :created
  end

  # PATCH/PUT /playlists/1
  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /playlists/1
  def destroy
    @playlist.destroy
  end

  private

    #returns the errors in case the exceptions are raised
    def render_unprocessable_entity_response invalid
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    #returns the errors in case the record isnt found
    def render_not_found_response
      render json: { errors: ["User not found"] }, status: :not_found
    end

    # Only allow a list of trusted parameters through.
    def playlist_params
      params.permit(:user_id, :name, :description, :spotify_id, :type, :image)
    end
end
