class ReferencesController < ApplicationController
  def index
    @references = Reference.all.select { |reference| reference.tasks.count.positive? }
  end
end
