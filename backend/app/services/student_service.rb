class StudentService
  class << self
    def search_by_registration(reg_number)
      validate_registration_number!(reg_number)
      student = Student.find_by!(registration_number: reg_number)
      StudentSerializer.format(student)
    end

    def get_statistics
      statistics = Statistic.all
      StatisticSerializer.format(statistics)
    end

    def get_top_group_a
      GroupATop10Serializer.format_all(GroupATop10.includes(:student).all)
    end

    private

    def validate_registration_number!(reg_number)
      unless reg_number =~ /\A\d{8}\z/
        raise ArgumentError, "Registration number must be exactly 8 digits"
      end
    end
  end
end
