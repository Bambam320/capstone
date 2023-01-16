class RemoveDurationFromSongs < ActiveRecord::Migration[7.0]
  def change
    remove_column :songs, :duration
  end
end
