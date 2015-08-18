class MessagesController < ApplicationController
  def index
    
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
        MailSender.new.mail(message_params)
      else
        flash[:notice] = "You wrong"
      end
  end

  private 

  def message_params
    params.require(:message).permit(:to, :from, :title, :body, :sender_email, :receiver_email)
  end

end