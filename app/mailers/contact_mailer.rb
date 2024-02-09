class ContactMailer < ApplicationMailer
  def send_contact_email(first_name, last_name, phone, email, message)
    @first_name = first_name
    @last_name = last_name
    @phone = phone
    @email = email
    @message = message
    mail(to: 'oneleadz@gmail.com', subject: "Contact - #{first_name.capitalize} #{last_name.upcase}")
  end
end
