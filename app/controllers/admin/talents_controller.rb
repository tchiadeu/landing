class Admin::TalentsController < BaseController
  def index
    @talents = Talent.all
  end
end
