require 'faker'
require 'annotate'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
##### bundle exec rake db:setup
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Landline.destroy_all
Cellphone.destroy_all
Person.destroy_all
House.destroy_all

#populate houses
10.times{ House.create(address: Faker::Address.street_address) }

#populate people
20.times do
  Person.create(name: Faker::Name.first_name, house_id: rand(1..10))
end

#populate cellphones
20.times do |i|
  Cellphone.create number:Faker::PhoneNumber.phone_number,
  provider:Faker::Company.name,
  client_id:(i+1)
end

10.times do |i|
  Landline.create number:Faker::PhoneNumber.phone_number,
  house_id:(i+1)

end




