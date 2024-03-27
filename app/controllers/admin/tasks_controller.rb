class Admin::TasksController < ApplicationController
  before_action :set_task

  def show; end

  def edit; end

  def update
    if @task.update(task_params)
      flash[:notice] = 'Tâche modifiée avec succès'
      redirect_to admin_task_path(@task)
    else
      flash[:alert] = "#{@task.errors.full_messages.join(', ')}."
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
      :title, :description, illustrations_attributes: [:id, :category, :_destroy, :html_tag, :image],
      tags_attributes: %i[id name icone _destroy]
    )
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
