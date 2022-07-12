const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const asesor = new Schema({

    nombre: String,
    apelido: String,
    edad: String,
    cargo: String,
    sexo: String,
    cedula: String,
});

module.exports = mongoose.model("asesor", asesor)
