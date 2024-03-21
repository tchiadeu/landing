class AddColorToTalent < ActiveRecord::Migration[7.0]
  def change
    add_column :talents, :color, :string
  end
end
