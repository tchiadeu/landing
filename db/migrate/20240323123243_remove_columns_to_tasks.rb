class RemoveColumnsToTasks < ActiveRecord::Migration[7.0]
  def change
    remove_column :tasks, :category, :string
    remove_column :tasks, :icone, :string
  end
end
