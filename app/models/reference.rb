class Reference < ApplicationRecord
  has_one_attached :logo
  has_many :tasks, dependent: :destroy

  validates :name, :logo, presence: true

  accepts_nested_attributes_for :tasks, allow_destroy: true, reject_if: :all_blank
end
