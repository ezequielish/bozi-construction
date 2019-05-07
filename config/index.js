require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== "production",
    email: process.env.EMAIL,
    passwordEmail: process.env.PASS_EMAIL
};

module.exports = { config };