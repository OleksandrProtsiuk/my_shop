class Stuff < ApplicationRecord
  acts_as_taggable_on :tags

  validates :title, presence: true, uniqueness: { case_sensitive: false }
  validates :short_description, presence: true, length: { maximum: 120 }
end
