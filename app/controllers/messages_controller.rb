#require 'SecureRandom'
class MessagesController < ApplicationController
  before_action :authenticate, only: [:show]

  def index
    
  end

  def show
     # @message = Message.where Message.auth_token params[:id]
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)    
      if @message.valid?
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