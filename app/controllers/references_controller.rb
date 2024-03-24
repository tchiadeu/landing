class ReferencesController < ApplicationController
  def index
    @references = Reference.all.select do |reference|
      reference.tasks.count.positive? &&
        reference.tasks.any? { |task| task.illustrations.any? }
    end
  end

  def show
  end
end
