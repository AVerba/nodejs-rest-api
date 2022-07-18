const Joi = require("joi");
const regex=require('../helpers/regex/regex')

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().length(10).pattern(regex.phoneRegex).required()
})

module.exports = {
    addSchema
}
