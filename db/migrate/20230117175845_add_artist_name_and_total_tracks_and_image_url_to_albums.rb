class AddArtistNameAndTotalTracksAndImageUrlToAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :albums, :artist_name, :string
    add_column :albums, :total_tracks, :integer
    add_column :albums, :image_url, :string
  end
end
