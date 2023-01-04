class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :birthdate, :region
end
