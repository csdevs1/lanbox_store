class MessageMailer < ApplicationMailer
    default :to => "gabrielpinango1492@gmail.com"
    def message_me(msg)
        @msg = msg
        
        mail from: @msg.email, subject: @msg.subject do |format|
            format.html { render 'mailer' }
            format.text { render :text => 'Render text' }
        end
    end
end
