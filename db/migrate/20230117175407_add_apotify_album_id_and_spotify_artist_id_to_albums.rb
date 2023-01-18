class AddApotifyAlbumIdAndSpotifyArtistIdToAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :albums, :spotify_album_id, :string
    add_column :albums, :spotify_artist_id, :string
  end
end
