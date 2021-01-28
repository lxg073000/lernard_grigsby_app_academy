class CreateCellphone < ActiveRecord::Migration[5.2]
  def change
    create_table :cellphones do |t|
      t.integer :number, null: false
      t.text :provider, null:false
      
    end
  end
end
