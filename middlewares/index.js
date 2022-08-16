const validation = require('./validation');
const isValidId = require('./isValidId');
const authenticate=require('./authenticate');
const upload=require('./upload');
const sendMail =require('../helpers/sendMail');

module.exports = {
    validation,
    isValidId,
    authenticate,
    upload,
    sendMail
}