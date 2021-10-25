const path = require("path");
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const chalk = require('chalk');

//connect DB
mongoose.connect('mongodb+srv://usuario_01:CYgyXuobRjqHWqyU@proyect-ciclo3.qwead.mongodb.net/Proyect-Ciclo3?retryWrites=true&w=majority')
  .then(db => console.log('db Connect'))
  .catch(err => console.log(err));


//import Routes
const indexRoutes= require ('./src/routes/index');


//settings
app.set('port', process.env.PORT || 3001);//Toma el port del pc OR 3001
app.set('views', path.join( __dirname + 'views'));//decirle donde esta views
app.set('view engine', 'ejs')



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', indexRoutes);


//starting the server
app.listen(app.get('port'), () => {
  console.log(`Server run on port ${app.get('port')}`);  
});