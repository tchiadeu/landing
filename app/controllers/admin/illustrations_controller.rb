class Admin::IllustrationsController < ApplicationController
  def destroy
    @illustration = Illustration.find(params[:id])
    task = @illustration.task
    @illustration.destroy
    flash[:notice] = 'Tag supprimé avec succès'
    redirect_to admin_task_path(task), status: :see_other
  end
end
