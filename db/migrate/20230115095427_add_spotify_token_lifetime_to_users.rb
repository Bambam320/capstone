class AddSpotifyTokenLifetimeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :spotify_token_lifetime, :integer
  end
end
