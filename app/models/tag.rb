class Tag < ApplicationRecord
	validates_presence_of :body
  belongs_to :post
end
