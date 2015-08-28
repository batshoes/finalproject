require 'rails_helper'

RSpec.describe HomeController, type: :controller do

    let(:test_message) {Message.new( title:'Title',
                            body: 'Body',
                            to: 'Recipient',
                            from: 'Sender',
                            sender_email: 'test_email_1@gmail.com',
                            receiver_email: 'test_email_2@gmail.com',
                            access_token: 'Random')}
    
  
end