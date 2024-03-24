class Tag < ApplicationRecord
  LIST = [
    "at", "camera", "computer", "phone", "megaphone", "microphone", "people",
    "photo", "illustration", "paint", "light", "rocket", "chat", "check", "cloud"
  ]
  SOCIALS = [
    "facebook", "instagram", "linkedin", "twitter", "tiktok", "youtube"
  ]
  ALL_OPTIONS = LIST + SOCIALS

  belongs_to :task

  validates :name, :icone, presence: true
end
