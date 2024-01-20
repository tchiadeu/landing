class RemoveAvatarToTalents < ActiveRecord::Migration[7.0]
  def change
    remove_column :talents, :avatar, :string
  end
end
