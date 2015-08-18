class AddReturnEmail < ActiveRecord::Migration
  def change
    add_column :messages, :receiver_email, :string
  end
end
