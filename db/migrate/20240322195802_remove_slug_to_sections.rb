class RemoveSlugToSections < ActiveRecord::Migration[7.0]
  def change
    remove_column :sections, :slug, :string
  end
end
