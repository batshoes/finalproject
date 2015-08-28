#require 'SecureRandom'
class MessagesController < ApplicationController

  def index
    @messages = Message.all
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
        @message.sender_email = "middlemissj.usa@gmail.com"
        @message.save
        redirect_to messages_path
        flash[:notice] = "Success"
        MailSender.new.mail(@message)
      else
        flash[:notice] = "You wrong"
      end
  end

  def destroy
    @message = Message.find params[:id]
    @message.destroy!
    flash[:alert] = "Message is gone forever!"
    redirect_to message_path(RandomPath.new.path)
  end


private


  def message_params
    params.require(:message).permit(:to, :from, :title, :body, :sender_email, :receiver_email, :access_token)
  end

end