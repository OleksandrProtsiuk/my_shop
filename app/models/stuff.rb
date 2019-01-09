class Stuff < ApplicationRecord
  has_many :comments
  accepts_nested_attributes_for :comments
  acts_as_taggable_on :tags

  validates :title, presence: true, uniqueness: { case_sensitive: false }
  validates :short_description, presence: true, length: { maximum: 120 }

  def to_param
    slug
  end
end
