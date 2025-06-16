require 'csv'

students = []
batch_size = 50000

CSV.foreach(Rails.root.join('diem_thi_thpt_2024.csv'), headers: true).with_index do |row, idx|
  students << Student.new(
    registration_number: row['sbd'],
    math: row['toan'],
    literature: row['ngu_van'],
    english: row['ngoai_ngu'],
    physics: row['vat_li'],
    chemistry: row['hoa_hoc'],
    biology: row['sinh_hoc'],
    history: row['lich_su'],
    geography: row['dia_li'],
    civic_education: row['gdcd'],
    language_code: row['ma_ngoai_ngu']
  )

  if students.size >= batch_size
    Student.import students
    puts "Imported #{idx + 1} students..."
    students.clear
  end
end

Student.import students if students.any?
puts "Done importing students!"

# Save top 10 group A students using scope
puts "Calculating top 10 group A students..."
GroupATop10.delete_all
Student.group_a_top_10.each do |student|
  GroupATop10.create!(
    student: student,
    total_score: student.total_score
  )
end
puts "Saved top 10 group A students!"

# Save statistics using defined constants
puts "Calculating statistics..."
Statistic.delete_all

Student::SUBJECTS.each do |subject|
  Student::SCORE_LEVELS.each do |level, range|
    count = Student.where("#{subject} >= ? AND #{subject} < ?", range[:min], range[:max]).count
    Statistic.create!(
      subject: subject,
      level: level.to_s,
      count: count
    )
  end
end

puts "Done!"
