class CreateStatistics < ActiveRecord::Migration[8.0]
  def change
    create_table :statistics do |t|
      t.string :subject
      t.string :level
      t.integer :count

      t.timestamps
    end
  end
end
