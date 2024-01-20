class CreateTalents < ActiveRecord::Migration[7.0]
  def change
    create_table :talents do |t|
      t.string :first_name
      t.string :last_name
      t.string :job
      t.string :social_network
      t.string :avatar

      t.timestamps
    end
  end
end
