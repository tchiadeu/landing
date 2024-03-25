class Illustration < ApplicationRecord
  CATEGORIES = %w[screen youtube instagram]

  belongs_to :task
  has_one_attached :image

  validates :category, presence: true
  validates :image, presence: true, if: -> { category == 'screen' }
  validates :html_tag, presence: true, if: -> { %w[youtube instagram].include?(category) }

  def configured_html
    self.html_tag.gsub(/<script\s+async\s+src=\"\/\/www\.instagram\.com\/embed\.js\"><\/script>/, '')
                 .html_safe
  end
end
