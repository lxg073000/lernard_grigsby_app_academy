class Cellphone < ApplicationRecord
  validates :number, presence: true
  validates :client_id, presence: true

end