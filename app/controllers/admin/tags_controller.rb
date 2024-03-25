class Admin::TagsController < ApplicationController
  def destroy
    @tag = Tag.find(params[:id])
    task = @tag.task
    @tag.destroy
    flash[:notice] = 'Tag supprimé avec succès'
    redirect_to admin_task_path(task), status: :see_other
  end
end
