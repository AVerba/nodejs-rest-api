const Joi = require("joi");

const addSchema = Joi.object({
    id:Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required()
})

module.exports = {
    addSchema
}