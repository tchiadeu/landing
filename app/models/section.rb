class Section < ApplicationRecord
  has_rich_text :subtitle
  has_rich_text :description
  has_many_attached :photos
  validates :title, presence: true
end
