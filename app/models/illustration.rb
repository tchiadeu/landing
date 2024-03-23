class Illustration < ApplicationRecord
  CATEGORIES = %w[screen youtube instagram]

  belongs_to :task
  has_many_attached :images

  validates :category, presence: true
  validates :images, presence: true, if: -> { category == 'screen' }
  validates :html_tag, presence: true, if: -> { %w[youtube instagram].include?(category) }
end
