class Social < ApplicationRecord
  belongs_to :talent, optional: true
  belongs_to :user, optional: true

  validates :name, :url, presence: true

  CATEGORIES = %w[Facebook Twitter Linkedin Instagram TikTok].freeze
end
