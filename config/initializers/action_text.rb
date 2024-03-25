Rails.application.config.after_initialize do
  ActionText::ContentHelper.allowed_tags << "u"
  ActionText::ContentHelper.allowed_tags << "sup"
  ActionText::ContentHelper.allowed_tags << "sub"
end
