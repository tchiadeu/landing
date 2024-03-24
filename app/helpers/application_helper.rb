module ApplicationHelper
  def svg_tag(filepath, options = {})
    svg = File.open("app/assets/images/#{filepath}", "rb") { |file| raw file.read }
    doc = Nokogiri::HTML::DocumentFragment.parse svg
    svg = doc.at_css "svg"
    svg["class"] = options[:class] if options[:class].present?
    svg["id"] = options[:id] if options[:id].present?
    options[:data].each { |key, value| svg["data-#{key}"] = value } if options[:data].present?
    raw svg
  end
end
