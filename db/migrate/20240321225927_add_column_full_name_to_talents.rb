class AddColumnFullNameToTalents < ActiveRecord::Migration[7.0]
  def change
    add_column :talents, :fullname, :string
  end
end
