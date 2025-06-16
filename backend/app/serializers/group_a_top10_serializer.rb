class GroupATop10Serializer
  def self.format_all(records)
    records.map do |record|
      {
        registration_number: record.student.registration_number,
        math: record.student.math,
        physics: record.student.physics,
        chemistry: record.student.chemistry,
        total_score: record.total_score
      }
    end
  end
end
