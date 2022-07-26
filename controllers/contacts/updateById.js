const {createError} = require("../../helpers");

const {Contact} = require('../../models/contact')


const updateById = async (req, res) => {

    const {id} = req.params;
    const result = await Contact.findByIdAndUpdate  (id, req.body);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;