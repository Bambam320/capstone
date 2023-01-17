class SongSerializer < ActiveModel::Serializer
  attributes :id, :album_id, :playlist_id, :artist_id, :featured_artist, :release_date, :name, :genre, :spotify_playlist_id
end
