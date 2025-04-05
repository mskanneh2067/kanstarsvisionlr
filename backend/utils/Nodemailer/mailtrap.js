
import Nodemailer from "nodemailer"
import { MailtrapTransport } from "mailtrap"

const TOKEN = "59cdd9d25b7fa0bbfa50612d6e5aa13d";


const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

const sender = {
  address: "hello@demomailtrap.com",
  name: "Kanstars Vision",
};



const recipients = [
  "webmaster.kvilr@gmail.com",
];

transport
  .sendMail({
    from: sender,
    to: recipients,
    subject: "Welcome",
    text: "Dear customer, Your account has been successfully created.Please click on the link below to activate your account.This link will expire in 24 hours.",
    category: "Integration Test",
  })
  .then(console.log, console.error);