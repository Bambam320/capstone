class Song < ApplicationRecord
  #establishes relationship to other models
  belongs_to :playlists
  belongs_to :albums
  belongs_to :artists

  #validations for song data
  validates :year, numericality: { minimum: 1300, maximum: 2024 }
end
