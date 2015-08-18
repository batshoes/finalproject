class RenameAuthToken < ActiveRecord::Migration
  def change
    rename_column :messages, :auth_token, :access_token
  end
end
