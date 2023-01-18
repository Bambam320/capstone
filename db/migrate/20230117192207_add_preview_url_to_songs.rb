class AddPreviewUrlToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :preview_url, :string
  end
end
