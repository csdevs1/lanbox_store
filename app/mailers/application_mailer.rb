class ApplicationMailer < ActionMailer::Base
  default from: "from@example.com"
    layout 'mailer.html.erb'
end
