import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host:"smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7692ecbdb39df5",
    pass: "3848a33f1a8ff9"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gabriel Rossales <gabrielrossales@gmail.com>',
      subject,
      html: body,
    });
  }

}