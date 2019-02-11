require 'faker'
FactoryBot.define do
  factory :item do
    name { Faker::FunnyName.name }
    description {Faker::Lorem.sentence}
    status {["available", "not_available"].sample}
  end
end