#require 'SecureRandom'
class MessagesController < ApplicationController

  def index
    
  end

  def show
     @messages = Message.where access_token: params[:id]
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)    
      if @message.valid?
        body = Condenser.new.contract(@message.body)
        @message.body = body
        @message.save
        redirect_to root_path
        flash[:notice] = "Success"
        MailSender.new.mail(@message)
      else
        flash[:notice] = "You wrong"
      end
  end


private


  def message_params
    params.require(:message).permit(:to, :from, :title, :body, :sender_email, :receiver_email, :auth_token)
  end

end
book