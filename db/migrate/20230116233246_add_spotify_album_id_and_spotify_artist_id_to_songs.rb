class AddSpotifyAlbumIdAndSpotifyArtistIdToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :spotify_album_id, :integer
    add_column :songs, :spotify_artist_id, :integer
  end
end
