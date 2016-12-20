var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var massive = require('massive');
var passportGithub2 = require('passport-Github2');
var mainCtrl = require('./server/mainCtrl.js');
var app = express();
var corsOptions = {
  origin: 'http://localhost:'+config.port
};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(session({
  secret: config.sessionSecret,
  currentUser: null,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

/////////////
// DATABASE //
/////////////



app.listen(config.port, function(){
  console.log('listening to port: ',config.port);
});
