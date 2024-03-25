class Section < ApplicationRecord
  has_rich_text :title
  has_rich_text :subtitle
  has_rich_text :description
  validates :title, presence: true
end
