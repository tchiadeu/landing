class Talent < ApplicationRecord
  has_one_attached :photo

  serialize :social_network, Hash

  validates :first_name, :last_name, :job, presence: true
end
