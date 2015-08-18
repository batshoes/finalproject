class MailSender
  def mail(params)
    puts params.inspect
    @email_to = params['receiver_email']
    @email_from = params['sender_email']
    @name = params['to']
    @your_name = params['from']
    @title = params['title']
    @body = params['body']



    @confirmation = "<p>Hi!, #{@name} You've gotten a Fleet from #{@your_name}"
    
    mandrill = Mandrill::API.new ENV['MANDRILL_APIKEY']
     message = {to: [{"type"  =>"to",
                      "email" =>"#{@email_to}",
                      "name"  =>"#{@name}" }],
                subject: "You've Got a Fleet",
                from_email: "#{@email_from}",
                html: "#{@confirmation} " 
               }

    puts mandrill.messages.send message
  end  
end