const express = require('express');
mongo = "mongodb+srv://rommel123:Aries2017@cluster0.asmcj.mongodb.net/chat?retryWrites=true&w=majority";
const morgan = require('morgan');
const routes = require('./routers/login');
const routes2 = require('./routers/asesor.js');
const routes3 = require('./routers/venta.js');
const routes4 = require('./routers/portatil.js');
const path = require('path')
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs', engine());
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/accesorios', (req, res) => {
    res.render('accesorios');
});

app.get('/asesor', (req, res) => {
    res.render('asesor');
});

app.get('/venta', (req, res) => {
    res.render('venta');
});

app.get('/portatil', (req, res) => {
    res.render('portatil');
});


app.use('/', routes,routes2,routes3,routes4);


mongoose.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true},)
.then(()  => console.log('Connected to database mongodb'))
.catch(e  => console.log('error connect to database',e));  

app.listen(3000);
console.log(`servidor corriendo en el puerto 3000`);