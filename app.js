const express = require('express');
mongo = "mongodb+srv://rommel123:Aries2017@cluster0.asmcj.mongodb.net/chat?retryWrites=true&w=majority";
const morgan = require('morgan');
const routes = require('./routers/login');
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

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/accesorios', (req, res) => {
    res.render('accesorios');
});









































app.get('/computadoras', (req, res) => {
    res.render('computadora');
});


app.use('/', routes);

mongoose.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true},)
.then(()  => console.log('Connected to database mongodb'))
.catch(e  => console.log('error connect to database',e));  

app.listen(3000);
console.log(`servidor corriendo en el puerto 3000`);