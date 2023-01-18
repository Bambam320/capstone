class RemoveGenreFromAlbums < ActiveRecord::Migration[7.0]
  def change
    remove_column :albums, :genre
  end
end
