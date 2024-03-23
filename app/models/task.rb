class Task < ApplicationRecord
  belongs_to :reference
  has_many :tags, dependent: :destroy
  has_many :illustations, dependent: :destroy

  validates :title, :description, presence: true

  accepts_nested_attributes_for :tags, :illustations, allow_destroy: true
end
