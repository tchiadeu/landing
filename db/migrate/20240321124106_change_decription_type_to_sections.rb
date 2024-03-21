class ChangeDecriptionTypeToSections < ActiveRecord::Migration[7.0]
  def change
    change_column :sections, :description, :text
  end
end
