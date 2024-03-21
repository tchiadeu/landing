class RemoveColumnNameToTalents < ActiveRecord::Migration[7.0]
  def change
    remove_column :talents, :name, :string
  end
end
