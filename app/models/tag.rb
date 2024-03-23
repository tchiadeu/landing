class Tag < ApplicationRecord
  belongs_to :task

  validates :name, :icone, presence: true
end
