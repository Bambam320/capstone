class AddTypeOfPlaylistColumnToPlaylists < ActiveRecord::Migration[7.0]
  def change
    add_column :playlists, :type_of_playlist, :string
  end
end
