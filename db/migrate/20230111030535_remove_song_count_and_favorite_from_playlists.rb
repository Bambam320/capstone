class RemoveSongCountAndFavoriteFromPlaylists < ActiveRecord::Migration[7.0]
  def change
    remove_column :playlists, :song_count
    remove_column :playlists, :favorite
  end
end
