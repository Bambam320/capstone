class AddImageUrlAndSpotifyIdAndFollowersToArtists < ActiveRecord::Migration[7.0]
  def change
    add_column :artists, :image_url, :string
    add_column :artists, :spotify_id, :string
    add_column :artists, :followers, :integer
  end
end
