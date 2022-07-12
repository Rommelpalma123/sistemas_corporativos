const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const computadoras = new Schema({

    marca: String,
    color: String,
    pantalla: String,
    teclado: String,
    mouse: String,
    cámara: String,
    sistema_operativo: String
});
module.exports = mongoose.model("computadoras", computadoras)