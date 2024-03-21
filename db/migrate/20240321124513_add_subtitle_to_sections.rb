class AddSubtitleToSections < ActiveRecord::Migration[7.0]
  def change
    add_column :sections, :subtitle, :string
  end
end
