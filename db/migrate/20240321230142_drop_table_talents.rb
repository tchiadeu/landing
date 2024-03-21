class DropTableTalents < ActiveRecord::Migration[7.0]
  def change
    drop_table :talents
  end
end
