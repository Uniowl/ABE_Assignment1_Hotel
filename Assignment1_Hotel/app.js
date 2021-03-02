var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/db');


//var indexRouter = require('./routes/index');



const swaggerDefinition = {
  openapi:'3.0.0',
  info: {
    title: 'Express API to manage Hotels',
    version: '1.0.0', 
    description: 'This is a REST API application made with Express',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Gruppe 4',
      url:'https://github.com/Uniowl/ABE_Assignment1_Hotel',
    },
    servers: [{
      url: 'http://localhost:3000',
      description: 'Developmentserver',
    }]
  }
};

const options = {
  swaggerDefinition,
  //Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

var swaggerJSDoc = require('swagger-jsdoc');
const swaggerSpec = swaggerJSDoc(options);
const swaggerUi = require('swagger-ui-express');

var app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('', function (req, res) {
  res.render('index', {title: 'Express'});
});

app.use('/hotels', require('./routes/hotels'));

app.use('/users', require('./routes/users'));


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


