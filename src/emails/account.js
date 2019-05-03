const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sender = 'raplebre8@gmail.com'

const sendWelcomeEmail= (email, name) => {
    sgMail.send({
        to: email,
        from: sender,
        subject: 'Welcome!',
        text: `Welcome to the Task Manager App, ${name}!`,
        html: `<h1>Welcome to the Task Manager App, ${name}!</h1>`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: sender,
        subject: 'We hope to see you again!',
        text: `Farewell, ${name}. But before you go, can you please leave us your feedback? We wish to know if there was anything we could have done to keep you as a user.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
// sgMail.send({
//     to: 'ruben.lebre@gmail.com',
//     from: 'raplebre8@gmail.com',
//     subject: 'Test',
//     text: 'Teste  com task manager app'
// })