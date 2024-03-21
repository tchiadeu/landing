class RemoveSocialNetworkToTalents < ActiveRecord::Migration[7.0]
  def change
    remove_column :talents, :social_network, :text
  end
end
