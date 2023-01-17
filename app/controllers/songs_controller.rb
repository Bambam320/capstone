class SongsController < ApplicationController
    #rescues exceptions when data is not found or invalid
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # wraps incoming parameters to let Rails see them
    wrap_parameters format: []

  # GET /songs
  def index
    @songs = Song.all

    render json: @songs
  end

  # GET /songs/1
  def show
    render json: @song
  end

  # POST /songs
  def create
    playlist = Playlist.find(song_params[:playlist_id])
    byebug
    song = playlist.songs.create!(song_params)
    render json: song, status: :created
  end

  # params.permit(:album, :id, :artists, :name, :preview_url, :album_id, :playlist_id, :artist_id, :featured_artist, :release_date, :name, :genre)

  # PATCH/PUT /songs/1
  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songs/1
  def destroy
    @song.destroy
  end

  private

    #returns the errors in case the exceptions are raised
    def render_unprocessable_entity_response invalid
      render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    #returns the errors in case the record isnt found
    def render_not_found_response
      render json: { error: ["User not found"] }, status: :not_found
    end

    # Only allow a list of trusted parameters through.
    def song_params
      params.permit(:playlist_id, :name, :preview_url, :spotify_album_id, :spotify_playlist_id, :spotify_artist_id, :featured_artist, :release_date, :name, :genre)
    end

end

