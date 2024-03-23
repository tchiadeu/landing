class CreateIllustrations < ActiveRecord::Migration[7.0]
  def change
    create_table :illustrations do |t|
      t.string :category
      t.string :html_tag
      t.references :task, null: false, foreign_key: true

      t.timestamps
    end
  end
end
