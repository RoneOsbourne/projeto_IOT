var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminActuadorsRouter = require('./routes/admin/actuadors');
var adminSensorsRouter = require('./routes/admin/sensors'); // sensor de temperatura caminho
var authRouter = require('./routes/auth');
var verifyAuth = require('./middlewares/authMiddleware');
var sensorsRouter = require('./routes/sensors');
var actuadorsRouter = require('./routes/actuadors');


var app = express();

app.set('trust proxy', 1);
app.use(session({
    secret: 'mySecret123',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.resolve('./public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/admin/sensors', adminSensorsRouter);
app.use('/admin/actuadors', adminActuadorsRouter); //[verifyAuth],s
app.use('/users', usersRouter);
app.use('/sensors', sensorsRouter); // [verifyAuth], verify sensor temperatura
app.use('/actuadors', actuadorsRouter); // [verifyAuth], verify sensor temperatura

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