class AddSpotifyPlaylistIdToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :spotify_playlist_id, :integer
  end
end
