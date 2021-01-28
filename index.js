require('dotenv').config(); // set environment varible 
const express = require('express');
var app = express();
var port = 3000;
const bodyParser = require('body-parser')
var userRouter = require('./router/user-router');
var authRouter = require('./router/auth-user');
var checkAuth = require('./router/auth-filter');
var cookieParser = require('cookie-parser')
console.log(process.env.SESSION_SECRET); // log environment varible in system
var mongo = require('mongoose');
mongo.connect(process.env.URL_CONNECTION);

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true })) ;
app.use(express.static('public'));
app.use(cookieParser());

app.get('/',function(resquest,response){
    response.render('index');
})

app.use('/user',checkAuth,userRouter);
app.use('/auth',authRouter)

app.listen(port,function(){
    console.log('Listening in port ' + port);
})



