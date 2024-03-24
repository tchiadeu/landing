class Admin::TasksController < ApplicationController
  before_action :set_task

  def edit; end

  def update
    tasks_without_illustrations = @task.reference.tasks.select { |task| task.illustrations.empty? }
    if @task.update(task_params)
      flash[:notice] = 'Tâche modifiée avec succès'
      if tasks_without_illustrations.any?
        redirect_to edit_admin_task_path(tasks_without_illustrations.first)
      else
        redirect_to admin_reference(@task.reference)
      end
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
