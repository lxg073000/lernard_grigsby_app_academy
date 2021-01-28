class Landline < ApplicationRecord
  validates :number, presence: true
  validates :house_id, presence: true

end