class Message < ActiveRecord::Base
  # validates_presence_of :to, :from, :sender_email, :receiver_email, :title, :body
  before_save :generate_access_token
private
  
  def generate_access_token
    begin
      self.access_token = SecureRandom.hex
    end while self.class.exists?(access_token: access_token)
  end
end
