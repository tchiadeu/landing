module ApplicationHelper
  def svg_tag(filename, options = {})
    svg = File.open("app/assets/images/icons/#{filename}.svg", "rb") { |file| raw file.read }
    doc = Nokogiri::HTML::DocumentFragment.parse svg
    svg = doc.at_css "svg"
    svg["class"] = options[:class] if options[:class].present?
    options[:data].each { |key, value| svg["data-#{key}"] = value } if options[:data].present?
    raw svg
  end
end
