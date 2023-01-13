class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :birthdate, :region, :avatar_url
  has_many :playlists
end
