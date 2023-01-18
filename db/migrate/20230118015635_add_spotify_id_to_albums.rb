class AddSpotifyIdToAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :albums, :spotify_id, :string
  end
end
