var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var formUser = require('./routes/formUser');
var modifyUser = require('./routes/modifyUser');
var newUser = require('./routes/newUser');
var createUser = require('./routes/createUser');
var deleteUser = require('./routes/delete');
var find = require('./routes/finder');
var populateUser = require('./routes/populate');



var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function() {
  console.log('partials registered');
});

hbs.registerHelper('compare', function(lvalue, rvalue, options) {
  console.log("####### COMPARE lvalue :", lvalue, " et rvalue: ", rvalue);
  if (arguments.length < 3)
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  var operator = options.hash.operator || "==";
  var operators = {
    '==': function(l, r) {
      return l == r;

    }
  }
  if (!operators[operator])
    throw new Error("'compare' doesn't know the operator " + operator);
  var result = operators[operator](lvalue, rvalue);
  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
global.db = {};


var mongoClient = require('mongodb').MongoClient;
// Connexion URL
var url = 'mongodb://greta:azerty@127.0.0.1:27017/gretajs?authMechanism=DEFAULT';
//var url = 'mongodb://127.0.0.1:27017/gretajs';
// Utilisation de la methode “connect” pour se connecter au serveur
mongoClient.connect(url, function(err, client) {
  global.db = client.db('gretajs'); //On met en global la connexion à la base
  console.log("Connected successfully to server: global.db initialized");
});

var exosRouter = require('./routes/exos');
var countriesRouter = require('./routes/countries');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/exos', exosRouter);
app.use('/countries', countriesRouter);
app.use('/formUser', formUser); // affichera le formulaire
app.use('/modifyUser', modifyUser); // Enregistre les données dans la base
app.use('/newUser', newUser); // affichera le formulaire
app.use('/createUser', createUser); // Enregistre les données dans la base

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
