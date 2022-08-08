const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {createError} = require('../helpers');

const sendMail=async()=>{
    try {

    }
    catch (error){
        throw createError(404, `${error.message}`);
    }
};

module.exports =sendMail;