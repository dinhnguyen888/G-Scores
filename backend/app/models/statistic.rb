class Statistic < ApplicationRecord
  SCORE_LEVELS = {
    excellent: { min: 8.0, max: 10.0 },
    good: { min: 6.0, max: 8.0 },
    average: { min: 4.0, max: 6.0 },
    poor: { min: 0.0, max: 4.0 }
  }.freeze

  SUBJECTS = %w[math literature english physics chemistry biology history geography civic_education].freeze

  scope :by_subject, ->(subject) { where(subject: subject) }

  def self.format_statistics
    SUBJECTS.map do |subject|
      {
        subject: subject,
        levels: by_subject(subject).pluck(:level, :count).to_h
      }
    end
  end
end
