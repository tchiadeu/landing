class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]

  def home; end

  def send_contact
    first_name = params[:first_name]
    last_name = params[:last_name]
    email = params[:email]
    phone = params[:phone]
    message = params[:message]
    if email.match?(URI::MailTo::EMAIL_REGEXP)
      ContactMailer.send_contact_email(first_name, last_name, phone, email, message).deliver_now
      render json: { status: "success", message: 'Merci pour votre message, nous vous répondrons dans les plus brefs délais' }
    else
      render json: { status: "error", message: 'Veuillez renseigner une adresse email valide' }
    end
  end

  def contact; end

  def dashboard; end
end
