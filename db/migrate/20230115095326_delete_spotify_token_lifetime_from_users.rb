class DeleteSpotifyTokenLifetimeFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :spotify_token_lifetime
  end
end
