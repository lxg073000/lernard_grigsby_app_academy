class ChangeDataTypeInLandline < ActiveRecord::Migration[5.2]
  def change
    change_table :landlines do |t|
      t.change :number, :text
    end
  end
end
