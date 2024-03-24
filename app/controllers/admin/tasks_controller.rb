class Admin::TasksController < ApplicationController
  before_action :set_task

  def edit; end

  def update
    raise
    if @task.update(task_params)
      flash[:notice] = 'Tâche modifiée avec succès'
      redirect_to admin_reference(@task.reference)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    reference = @task.reference
    @task.destroy
    flash[:notice] = 'Tâche supprimée avec succès'
    redirect_to admin_reference_path(reference), status: :see_other
  end

  private

  def task_params
    params.require(:task).permit(
      :title, :description, illustations_attributes: [:id, :category, :html_tag, images: []],
      tags_attributes: %i[id name icone]
    )
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
