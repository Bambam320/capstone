class DeleteSpotifyAlbumIdFromSongs < ActiveRecord::Migration[7.0]
  def change
    remove_column :albums, :spotify_album_id
  end
end
