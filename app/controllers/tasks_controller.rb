class TasksController < ApplicationController
  before_action :set_task, only: %i[ show edit update destroy ]
  def index
    @tasks = Task.all
  end

  def show; end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to tasks_path, notice: "タスクを登録しました"
    else
      render :new, status: :unprocessable_entity
    end

  end

  def edit; end

  def update
    if @task.update(task_params)
      redirect_to task_path(@task)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    redirect_to tasks_path, status: :see_other
  end

  private
  def before_action
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :body)
  end
end
