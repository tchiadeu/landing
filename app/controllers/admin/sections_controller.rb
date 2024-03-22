class Admin::SectionsController < ApplicationController
  before_action :set_section, only: %i[edit update]

  def index
    @sections = Section.all
  end

  def edit; end

  def update
    if @section.update(section_params)
      flash[:notice] = "Modifications enregistrées avec succès."
      redirect_to admin_sections_path
    else
      flash[:alert] = "#{@section.errors.full_messages.join(', ')}."
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def section_params
    params.require(:section).permit(:title, :subtitle, :description)
  end

  def set_section
    @section = Section.find(params[:id])
  end
end