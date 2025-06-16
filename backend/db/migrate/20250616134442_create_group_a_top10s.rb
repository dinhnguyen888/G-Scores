class CreateGroupATop10s < ActiveRecord::Migration[8.0]
  def change
    create_table :group_a_top10s do |t|
      t.references :student, null: false, foreign_key: true
      t.float :total_score

      t.timestamps
    end
  end
end
