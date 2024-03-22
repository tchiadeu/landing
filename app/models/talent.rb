class Talent < ApplicationRecord
  has_one_attached :photo
  has_many :socials, dependent: :destroy

  validates :name, :job, :color, :photo, presence: true

  accepts_nested_attributes_for :socials, allow_destroy: true, reject_if: :all_blank
end
