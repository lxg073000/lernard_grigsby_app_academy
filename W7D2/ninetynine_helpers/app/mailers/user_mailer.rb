class UserMailer < ApplicationMailer
  default from: 'fancya_feline@yesyado.com'

  def welcome_email(user)
    @user = user
    mail(to:user.username + "@appacademy.io", subject: "You did it, you did it #{@user.username}.  You've become a new member at cats.com.cats.uk")

  end
end
