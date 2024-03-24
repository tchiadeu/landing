class Admin::ReferencesController < BaseController
  before_action :set_reference, only: %i[show edit update destroy]

  def index
    @references = Reference.all
  end

  def show; end

  def new
    @reference = Reference.new
  end

  def create
    @reference = Reference.new(reference_params)
    raise
    if @reference.save
      flash[:notice] = 'Référence créée avec succès'
      redirect_to admin_reference_path(@reference)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @reference.update(reference_params)
      flash[:notice] = 'Référence modifiée avec succès'
      redirect_to admin_reference_path(@reference)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @reference.destroy
    flash[:notice] = 'Référence supprimée avec succès'
    redirect_to admin_references_path, status: :see_other
  end

  private

  def reference_params
    params.require(:reference).permit(
      :name, :description, :logo,
      tasks_attributes: %i[id title description _destroy]
    )
  end

  def set_reference
    @reference = Reference.find(params[:id])
  end
end
