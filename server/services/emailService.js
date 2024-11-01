import 'dotenv/config';
import knex from 'knex';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
});

const sendEmail = async (to, subject, text, html, createdBy) => {
    try{
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: Array.isArray(to) ? to.join(',') : to,
            subject: subject,
            text: text,
            html: html,
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", result);

        // TODO: Add logging to the database
        // await knex('emails').insert({
        //    subject: subject,
        //    text: text,
        //    recipients: to.join(','),
        //    status: 1, // success status
        //    created_by: createdBy,
        //    created_at: new Date(),
        //    updated_at: new Date()
        // });

    } catch(error){
        console.log("Failed to send email: ", error);

        // await knex('emails').insert({
        //    subject: subject,
        //    text: text,
        //    recipients: to.join(','),
        //    status: 2, // failing status
        //    created_by: createdBy,
        //    created_at: new Date(),
        //    updated_at: new Date()
        // });

        throw error;
    }
}

export default sendEmail;
