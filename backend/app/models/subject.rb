class Subject < ApplicationRecord
  SCORE_LEVELS = {
    excellent: { min: 8.0, max: 10.0 },
    good: { min: 6.0, max: 8.0 },
    average: { min: 4.0, max: 6.0 },
    poor: { min: 0.0, max: 4.0 }
  }.freeze

  SUBJECTS = %w[math literature english physics chemistry biology history geography civic_education].freeze

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