class Talent < ApplicationRecord
  has_one_attached :photo

  validates :name, :job, :color, presence: true
end
