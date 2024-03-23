class RemoveColumnsToReferences < ActiveRecord::Migration[7.0]
  def change
    remove_column :references, :logo, :string
    remove_column :references, :url, :string
    add_column :references, :description, :text
  end
end
