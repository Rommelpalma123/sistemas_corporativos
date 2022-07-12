const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const accesorios = new Schema({

    placa: String,
    audifonos: String,
    microfono: String,
    ventiladores: String,
    mouse: String,
    mousepad: String,
    monitor: String,
    teclado: String,
    fuente: String
});

module.exports = mongoose.model("accesorios", accesorios)