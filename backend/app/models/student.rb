class Student < ApplicationRecord
  validates :registration_number, presence: true, uniqueness: true, 
    format: { with: /\A\d{8}\z/, message: "must be exactly 8 digits" }

  Subject::SUBJECTS.each do |subject|
    validates subject.to_sym, numericality: { 
      greater_than_or_equal_to: 0,
      less_than_or_equal_to: 10,
      allow_nil: true
    }
  end

  scope :group_a_top_10, -> {
    select("registration_number, math, physics, chemistry, 
      (CASE WHEN math IS NOT NULL AND physics IS NOT NULL AND chemistry IS NOT NULL 
        THEN math + physics + chemistry 
      END) as total_score")
    .where.not(math: nil)
    .where.not(physics: nil)
    .where.not(chemistry: nil)
    .order("total_score DESC NULLS LAST")
    .limit(10)
  }
end
