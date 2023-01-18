class RemoveCoverAndSongCountAndArtistsInAlbums < ActiveRecord::Migration[7.0]
  def change
    remove_column :albums, :cover
    remove_column :albums, :song_count
    remove_column :albums, :artist
  end
end
