class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]

  def home; end

  def contact; end

  def dashboard

  end
end
