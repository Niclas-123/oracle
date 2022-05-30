class Question
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :frage

  validates :frage, presence: :true

  def submit
    return false if invalid?

    return true
  end
end
