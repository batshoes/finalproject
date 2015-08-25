class MailSender

  attr_reader :message

  def mail(params)
    puts params.inspect
    @email_to = params['receiver_email']
    @email_from = params['sender_email']
    @name = params['to']
    @your_name = params['from']
    @access_token = params['access_token']

    
    @confirmation = "<p>Hi!, #{@name} You've gotten a PenMail from #{@your_name}.</p>"
    @confirmation = "#{@confirmation}" + "Click here! http://localhost:3000/messages/#{@access_token}"
    
    mandrill = Mandrill::API.new ENV['MANDRILL_APIKEY']
     message = {to: [{"type"  =>"to",
                      "email" =>"#{@email_to}",
                      "name"  =>"#{@name}" }],
                subject: "You've Got a PenMail",
                from_email: "#{@email_from}",
                html: "#{@confirmation} " 
               }

    puts mandrill.messages.send message
  end  
end