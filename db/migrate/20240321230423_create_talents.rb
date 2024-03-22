class CreateTalents < ActiveRecord::Migration[7.0]
  def change
    create_table :talents do |t|
      t.string :name
      t.string :job
      t.string :color

      t.timestamps
    end
  end
end
