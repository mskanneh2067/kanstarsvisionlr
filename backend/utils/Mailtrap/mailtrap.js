import { MailtrapClient } from "mailtrap";

const TOKEN = "59cdd9d25b7fa0bbfa50612d6e5aa13d";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

 export const sender = {
  email: "hello@demomailtrap.com",
  name: "Email Activation",
};


