/*
===============================================================================
; Title:  app.js
; Author: Professor Krasso
; Date:   5/5/2020
; Modified By: Laurie Mailloux
; Description: app
;==============================================================================
*/


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const mongoose = require("mongoose");

var apiCatalog = require('./routes/api-catalog');

var app = express();

/**
 *
 * Database connection
 */
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1-2bwgd.mongodb.net/api-gateway', {
  promiseLibrary: require("bluebird"),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true

}).then(() => {
  console.debug("Connection successful.");
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;