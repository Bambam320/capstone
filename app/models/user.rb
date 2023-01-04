class User < ApplicationRecord
  # brings brcypt awesomeness to the user model
  has_secure_password
  
  #establishes relationship to other models
  has_many :playlists

  validates :username, uniqueness: true
end
