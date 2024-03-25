class Illustration < ApplicationRecord
  CATEGORIES = %w[screen youtube instagram]

  belongs_to :task
  has_many_attached :images

  validates :category, presence: true
  validates :images, presence: true, if: -> { category == 'screen' }
  validates :html_tag, presence: true, if: -> { %w[youtube instagram].include?(category) }

  after_save :remove_script

  private

  def remove_script
    if category == 'instagram'
      update(html_tag: self.html_tag.gsub(/<script\s+async\s+src=\"\/\/www\.instagram\.com\/embed\.js\"><\/script>/, ''))
    end
  end
end
