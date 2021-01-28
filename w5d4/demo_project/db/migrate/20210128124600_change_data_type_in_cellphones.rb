class ChangeDataTypeInCellphones < ActiveRecord::Migration[5.2]
  def change
    change_table :cellphones do |t|
      t.change :number, :text
    end
  end
end
