require "test_helper"

class StudentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student = students(:one)
  end

  test "should get index" do
    get students_url, as: :json
    assert_response :success
  end

  test "should create student" do
    assert_difference("Student.count") do
      post students_url, params: { student: { biology: @student.biology, chemistry: @student.chemistry, civic_education: @student.civic_education, english: @student.english, geography: @student.geography, history: @student.history, language_code: @student.language_code, literature: @student.literature, math: @student.math, physics: @student.physics, registration_number: @student.registration_number } }, as: :json
    end

    assert_response :created
  end

  test "should show student" do
    get student_url(@student), as: :json
    assert_response :success
  end

  test "should update student" do
    patch student_url(@student), params: { student: { biology: @student.biology, chemistry: @student.chemistry, civic_education: @student.civic_education, english: @student.english, geography: @student.geography, history: @student.history, language_code: @student.language_code, literature: @student.literature, math: @student.math, physics: @student.physics, registration_number: @student.registration_number } }, as: :json
    assert_response :success
  end

  test "should destroy student" do
    assert_difference("Student.count", -1) do
      delete student_url(@student), as: :json
    end

    assert_response :no_content
  end
end
