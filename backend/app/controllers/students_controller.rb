class StudentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ArgumentError, with: :handle_argument_error

  # GET /students/search/:registration_number
  def search_by_registration
    student = StudentService.search_by_registration(params[:registration_number])
    render json: student
  end

  # GET /students/statistics
  def score_statistics
    render json: StudentService.get_statistics
  end

  # GET /students/top_group_a
  def top_group_a
    render json: StudentService.get_top_group_a
  end

  private

  def record_not_found
    render json: { 
      error: 'can not find student with the given registration number' 
    }, status: :not_found
  end

  def handle_argument_error(e)
    render json: { error: e.message }, status: :bad_request
  end
end
