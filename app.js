const express = require('express');
mongo = "mongodb+srv://rommel123:Aries2017@cluster0.asmcj.mongodb.net/chat?retryWrites=true&w=majority";
const morgan = require('morgan');
const routes = require('./routers/login');
const path = require('path')
const mongoose = require('mongoose');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.set('port', process.env.PORT || 1000);

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.use('/', routes);

mongoose.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true},)
.then(()  => console.log('Connected to database mongodb'))
.catch(e  => console.log('error connect to database',e));  

app.listen(app.get('port'), () => {

    console.log(`server on port ${app.get('port')}`);
});