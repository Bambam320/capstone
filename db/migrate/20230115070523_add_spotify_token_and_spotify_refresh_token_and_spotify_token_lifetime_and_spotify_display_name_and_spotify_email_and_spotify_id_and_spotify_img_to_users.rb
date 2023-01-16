class AddSpotifyTokenAndSpotifyRefreshTokenAndSpotifyTokenLifetimeAndSpotifyDisplayNameAndSpotifyEmailAndSpotifyIdAndSpotifyImgToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :spotify_token, :string
    add_column :users, :spotify_refresh_token, :string
    add_column :users, :spotify_token_lifetime, :datetime
    add_column :users, :spotify_display_name, :string
    add_column :users, :spotify_email, :string
    add_column :users, :spotify_id, :string
    add_column :users, :spotify_img, :string
  end
end