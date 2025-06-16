class Student < ApplicationRecord
  SCORE_LEVELS = {
    excellent: { min: 8.0, max: 10.0 },
    good: { min: 6.0, max: 8.0 },
    average: { min: 4.0, max: 6.0 },
    poor: { min: 0.0, max: 4.0 }
  }.freeze

  SUBJECTS = %w[math literature english physics chemistry biology history geography civic_education].freeze

  validates :registration_number, presence: true, uniqueness: true,
    format: { with: /\A\d{8}\z/, message: "must be exactly 8 digits" }

  SUBJECTS.each do |subject|
    validates subject.to_sym, numericality: {
      greater_than_or_equal_to: 0,
      less_than_or_equal_to: 10,
      allow_nil: true
    }
  end

  scope :group_a_top_10, -> {
    select("id, registration_number, math, physics, chemistry,
      (CASE WHEN math IS NOT NULL AND physics IS NOT NULL AND chemistry IS NOT NULL
        THEN math + physics + chemistry
      END) as total_score")
    .where.not(math: nil)
    .where.not(physics: nil)
    .where.not(chemistry: nil)
    .order("total_score DESC NULLS LAST")
    .limit(10)
  }


  def self.get_level(score)
    return nil if score.nil?

    SCORE_LEVELS.each do |level, range|
      return level if score >= range[:min] && score < range[:max]
    end
    nil
  end

  def self.validate_score(score)
    return false if score.nil?
    score.is_a?(Numeric) && score >= 0 && score <= 10
  end
end
