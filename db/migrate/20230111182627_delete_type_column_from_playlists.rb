class DeleteTypeColumnFromPlaylists < ActiveRecord::Migration[7.0]
  def change
    remove_column :playlists, :type
  end
end
