const {createError} = require('../../helpers')
const contacts = require('../../models/contacts');

const getById = async (req, res) => {
    const {contactId} = req.params;
    const result = await contacts.getContactById(contactId);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = getById;