class Admin::TalentsController < BaseController
  before_action :set_talent, only: %i[edit update destroy]

  def index
    @talents = Talent.all
  end

  def new
    @talent = Talent.new
  end

  def create
    @talent = Talent.new(talent_params)
    if @talent.save
      flash[:notice] = "Talent ajouté avec succès."
      redirect_to admin_talents_path
    else
      flash[:alert] = "#{@talent.errors.full_messages.join(', ')}."
      render :new, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @talent.update(talent_params)
      flash[:notice] = "Modifications enregistrées avec succès."
      redirect_to admin_talents_path
    else
      flash[:alert] = "#{@talent.errors.full_messages.join(', ')}."
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @talent.destroy
    flash[:notice] = "Talent supprimé avec succès."
    redirect_to admin_talents_path, status: :see_other
  end

  private

  def talent_params
    params.require(:talent).permit(
      :name, :job, :color, :photo,
      socials_attributes: %i[id name url _destroy]
    )
  end

  def set_talent
    @talent = Talent.find(params[:id])
  end
end
