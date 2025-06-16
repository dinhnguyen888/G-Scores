class StudentSerializer
  def self.format(student)
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
