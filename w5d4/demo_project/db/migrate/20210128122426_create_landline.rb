class CreateLandline < ActiveRecord::Migration[5.2]
  def change
    create_table :landlines do |t|
      t.integer :number, null: false
      t.integer :house_id, null: false
    end
  end
end
