const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const portatil = new Schema({

    marca: String,
    color: String,
    pantalla: String,
    procesador: String,
    mouse: String,
    protector: String,
    sistema_operativo: String,
});

module.exports = mongoose.model("portatil", portatil);