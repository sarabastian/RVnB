class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :orders
  has_many :vans, through: :orders
  has_many :vans, through: :saved_vans
  has_many :saved_vans
  has_many :reviews

end