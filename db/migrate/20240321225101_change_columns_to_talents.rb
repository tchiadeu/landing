class ChangeColumnsToTalents < ActiveRecord::Migration[7.0]
  def change
    rename_column :talents, :first_name, :name
    remove_column :talents, :last_name, :string
  end
end
