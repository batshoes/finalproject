class AddAuthTokenToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :auth_token, :string
  end
end
