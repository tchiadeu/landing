class TalentsController < ApplicationController
  def new
    @talent = Talent.new
  end

  def create
    @talent = Talent.new(talent_params)
    if @talent.save
      redirect_to dashboard_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def talent_params
    params.require(:talent).permit(:first_name, :last_name, :job, :scoail_network, :avatar)
  end
end
