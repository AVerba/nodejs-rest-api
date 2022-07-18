const mongoose = require("mongoose");

const app = require('./app')


const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(PORT)
        console.log('server is running')
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })
