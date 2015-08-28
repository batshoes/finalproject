class MailSender

  attr_reader :message

  def mail(params)
    puts params.inspect
    @title = params['title'] || "Le Title"
    @email_to = params['receiver_email'] || "Pokemon@gmail.com"
    @email_from = params['sender_email'] || "noreply@invisibleink.com"
    @name = params['to'] || "Pumpkins"
    @your_name = params['from'] || "Other Fish"
    @access_token = params['access_token']

    
    @confirmation = "<p>Hi!, #{@name} You've gotten a message in Invisible Ink from #{@your_name}.</p>"
    @confirmation = "#{@confirmation}" + "Click here! https://nameless-refuge-2654.herokuapp.com/messages/#{@access_token}"
    
    mandrill = Mandrill::API.new ENV['MANDRILL_APIKEY']
     message = {to: [{"type"  =>"to",
                      "email" =>"#{@email_to}",
                      "name"  =>"#{@name}" }],
                subject: "#{@title}",
                from_email: "#{@email_from}",
                html: "#{@confirmation} " 
               }

    puts mandrill.messages.send message
  end  
end