require 'csv'

students = []
batch_size = 5000

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
puts "Done!"
