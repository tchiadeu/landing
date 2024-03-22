class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, comparison: { equal_to: "test@test.com" }
  has_many :socials, dependent: :destroy

  accepts_nested_attributes_for :socials, allow_destroy: true, reject_if: :all_blank
end
