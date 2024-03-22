class TalentsController < ApplicationController
  def index
    @talents = Talent.all
    @section = Section.find_by(category: "talent")
  end
end
