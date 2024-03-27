class Admin::SectionsController < ApplicationController
  before_action :set_section, only: %i[edit update]

  def index
    @sections = Section.all
  end

  def edit; end

  def update
    if @section.update(section_params)
      destroy_photo?
      flash[:notice] = "Modifications enregistrées avec succès."
      redirect_to admin_sections_path
    else
      flash[:alert] = "#{@section.errors.full_messages.join(', ')}."
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def section_params
    params.require(:section).permit(:title, :subtitle, :description, photos: [])
  end

  def set_section
    @section = Section.find(params[:id])
  end

  def destroy_photo?
    if params[:section][:photo_ids_to_delete].present?
      params[:section][:photo_ids_to_delete].each do |photo_id|
        @section.photos.find(photo_id).purge
      end
    end
  end
end
