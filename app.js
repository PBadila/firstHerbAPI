var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//!!add code for routers here as well!!
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var herbsRouter = require('./routes/herbs');

var app = express();
//a bunch of "middlewares" everything passes through here
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//!!add all my routers here (for the herbs and the store, users is already here)!!
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/herbs', herbsRouter);

module.exports = app;
