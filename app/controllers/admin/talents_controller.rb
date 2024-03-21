class Admin::TalentsController < BaseController
  def index
    @talents = Talent.all
  end

  def new
    @talent = Talent.new
  end

  def create
    @talent = Talent.new(talent_params)
    if @talent.save
      redirect_to admin_talents_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def talent_params
    params.require(:talent).permit(:fullname, :job, :color, :photo)
  end
end
