class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]

  def home; end

  def send_contact
    first_name = params[:first_name]
    last_name = params[:last_name]
    email = params[:email]
    phone = params[:phone]
    message = params[:message]

    ContactMailer.send_contact_email(first_name, last_name, phone, email, message).deliver_now
  end

  def contact; end

  def dashboard

  end
end
