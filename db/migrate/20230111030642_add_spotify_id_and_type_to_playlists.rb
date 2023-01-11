class AddSpotifyIdAndTypeToPlaylists < ActiveRecord::Migration[7.0]
  def change
    add_column :playlists, :spotify_id, :text
    add_column :playlists, :type, :string
  end
end
