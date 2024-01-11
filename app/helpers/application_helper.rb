module ApplicationHelper
  def show_svg(svg_name)
    File.open("app/assets/images/icones/#{svg_name}.svg", "rb") do |file|
      raw file.read
    end
  end
end
