const nodemailer = require('nodemailer');
const { email, passwordEmail } = require('../config/index').config;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email, // TODO: your gmail account
        pass: passwordEmail // TODO: your gmail password
    }
});

module.exports = {
    transporter
}