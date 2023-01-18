class RemoveHometownFromArtists < ActiveRecord::Migration[7.0]
  def change
    remove_column :artists, :hometown
  end
end
