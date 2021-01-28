class AddCellphonePersonId < ActiveRecord::Migration[5.2]
  def change
    add_column :cellphones, :client_id, :integer, null: false
    add_column :cellphones, :client_name, :text
  end
end
