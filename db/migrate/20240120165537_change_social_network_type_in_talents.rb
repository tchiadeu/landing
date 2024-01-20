class ChangeSocialNetworkTypeInTalents < ActiveRecord::Migration[7.0]
  def change
    change_column :talents, :social_network, :text
  end
end
