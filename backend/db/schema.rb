# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_06_14_080458) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "students", force: :cascade do |t|
    t.string "registration_number"
    t.float "math"
    t.float "literature"
    t.float "english"
    t.float "physics"
    t.float "chemistry"
    t.float "biology"
    t.float "history"
    t.float "geography"
    t.float "civic_education"
    t.string "language_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["registration_number"], name: "index_students_on_registration_number", unique: true
  end
end
