class AddCategoryToSections < ActiveRecord::Migration[7.0]
  def change
    add_column :sections, :category, :string
  end
end
