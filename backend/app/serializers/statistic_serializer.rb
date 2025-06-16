class StatisticSerializer
  def self.format(statistics)
    Student::SUBJECTS.map do |subject|
      stats_for_subject = statistics.select { |s| s.subject == subject }
      {
        subject: subject,
        levels: stats_for_subject.map { |s| [ s.level, s.count ] }.to_h
      }
    end
  end
end
