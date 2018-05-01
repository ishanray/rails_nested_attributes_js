class RemoveUniqueConstraintFromTagsPostId < ActiveRecord::Migration[5.1]
  def change
    remove_index :tags, :post_id
    add_index :tags, :post_id
  end
end
