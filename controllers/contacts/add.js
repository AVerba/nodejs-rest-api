const {createError} = require('../../helpers');

const contacts = require('../../models/contacts');

const {addSchema} = require('../../schemas/contacts')

const add = async (req, res) => {
    const {error} = addSchema.validate(req.body);
    if (error) {
        throw createError(400, error.message);
    }
    const result = await contacts.addContact(req.body)
    res.status(201).json(result);
}

module.exports = add;