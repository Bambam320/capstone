class Playlist < ApplicationRecord
    #establishes relationship to other models
  belongs_to :user
  has_many :songs
  has_many :artists, through: :songs
  has_many :albums, through: :songs
end
