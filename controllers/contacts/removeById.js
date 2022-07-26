const {createError} = require("../../helpers");

const {Contact} = require('../../models/contact')

const removeById = async (req, res) => {
    const {id} = req.params;
    const result = await Contact.findOneAndDelete(id);
    if (!result) {
        throw createError(404)
    }
    res.json({
        message: "Contact deleted successfully"
    })
}

module.exports = removeById;