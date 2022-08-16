const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");
const {User} = require('../../models/user');
const {createError,sendEmail} = require('../../helpers/createError');

const register = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user) {
        throw createError(409, "Email is use");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
    const result = await User.create({...req.body, hashPassword, avatarURL,verificationToken});
    const mail = {
        to: email,
        subject: "Please follow the link to confirm registration ",
        html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Click here</a>`
    }
    await sendEmail(mail);
    res.status(200).json({
        user: {
            email: result.email,
            subscription: result.subscription,
        }
    })

}
module.exports = register;