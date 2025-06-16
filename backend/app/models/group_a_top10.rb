class GroupATop10 < ApplicationRecord
  belongs_to :student

  def self.format_top_10
    includes(:student).all.map do |record|
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
