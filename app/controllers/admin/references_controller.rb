class Admin::ReferencesController < BaseController
  def index
    @references = Reference.all
  end
end
