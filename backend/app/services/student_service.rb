class StudentService
  class << self
    def search_by_registration(reg_number)
      validate_registration_number!(reg_number)
      student = Student.find_by!(registration_number: reg_number)
      format_full_student_response(student)
    end

    def get_statistics
      Subject::SUBJECTS.map do |subject|
        {
          subject: subject,
          levels: calculate_subject_statistics(subject)
        }
      end
    end

    def get_top_group_a
      Student.group_a_top_10.map { |student| format_response(student) }
    end

    private

    def validate_registration_number!(reg_number)
      unless reg_number =~ /\A\d{8}\z/
        raise ArgumentError, 'Registration number must be exactly 8 digits'
      end
    end

    def calculate_subject_statistics(subject)
      return unless Subject::SUBJECTS.include?(subject.to_s)

      {
        excellent: count_by_level(subject, :excellent),
        good: count_by_level(subject, :good),
        average: count_by_level(subject, :average),
        poor: count_by_level(subject, :poor)
      }
    end

    def count_by_level(subject, level)
      range = Subject::SCORE_LEVELS[level]
      query = Student.where("#{subject} >= ?", range[:min])
      query = query.where("#{subject} < ?", range[:max]) if range[:max] < 10
      query.count
    end

    def format_response(student)
      {
        registration_number: student.registration_number,
        math: student.math,
        physics: student.physics,
        chemistry: student.chemistry,
        total_score: student.try(:total_score)
      }
    end

    def format_full_student_response(student)
      {
        registration_number: student.registration_number,
        
        math: student.math,
        literature: student.literature,
        english: student.english,
        physics: student.physics,
        chemistry: student.chemistry,
        biology: student.biology,
        history: student.history,
        geography: student.geography,
        civic_education: student.civic_education,
        
       
        language_code: student.language_code
      }
    end

  end
end