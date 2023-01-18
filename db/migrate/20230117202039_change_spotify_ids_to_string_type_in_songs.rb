class ChangeSpotifyIdsToStringTypeInSongs < ActiveRecord::Migration[7.0]
  def change
    change_column :songs, :spotify_album_id, :string
    change_column :songs, :spotify_artist_id, :string
    change_column :songs, :spotify_playlist_id, :string
  end
end
