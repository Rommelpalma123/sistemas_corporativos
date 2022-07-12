const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const venta = new Schema({

    precio: String,
    cantidad: String,
    
});

module.exports = mongoose.model("venta", venta)


