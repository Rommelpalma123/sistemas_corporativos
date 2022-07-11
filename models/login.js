const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const login = new Schema({

    nombre: String,
    apelidp: String,
});

module.exports = mongoose.model("login", login)
