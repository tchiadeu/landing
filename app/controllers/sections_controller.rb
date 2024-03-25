class SectionsController < ApplicationController
  def agency
    @section = Section.find_by(category: "agency")
    @photos = @section.photos.sample(6)
  end

  def contact
    @section = Section.find_by(category: "contact")
    @user = User.first
  end
end
