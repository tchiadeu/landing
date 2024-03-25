class Task < ApplicationRecord
  belongs_to :reference
  has_many :tags, dependent: :destroy
  has_many :illustrations, dependent: :destroy
  has_rich_text :title
  has_rich_text :description

  validates :title, :description, presence: true

  accepts_nested_attributes_for :tags, :illustrations, allow_destroy: true, reject_if: :all_blank
end
