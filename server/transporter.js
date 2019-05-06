const nodemailer = require('nodemailer');


// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', // TODO: your gmail account
        pass: '' // TODO: your gmail password
    }
});

module.exports = {
    transporter
}