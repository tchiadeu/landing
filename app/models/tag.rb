class Tag < ApplicationRecord
  LIST = [
    "facebook", "instagram", "linkedin", "twitter", "tiktok", "youtube", "at", "camera",
    "photo", "illustration", "paint", "light", "rocket", "chat", "check", "cloud",
    "computer", "phone", "megaphone", "microphone", "people"
  ]

  belongs_to :task

  validates :name, :icone, presence: true
end
