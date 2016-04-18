class LanboxPageController < ApplicationController
    def home
        @message = Message.new
    end
    
    def new
      #  @message = Message.new
    end
    
    def create
        @message = Message.new(message_params)
        
        if @message.valid?
            MessageMailer.message_me(@message).deliver_now
            redirect_to :root, notice: "Thank you for your message."
        else
            redirect_to escribenos_path
        end
    end
    
    private
        def message_params
            params.require(:message).permit(:name, :email, :subject, :content)
        end
end
