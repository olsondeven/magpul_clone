const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
var massive = require('massive');
const passportGithub2 = require('passport-Github2');
const mainCtrl = require('./server/mainCtrl.js');
const app = express();
const corsOptions = {
  origin: 'http://localhost:'+config.port
};
//middleware
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
//sync to database
const connectionString = 'postgres://postgres:'+config.masPas+'@localhost/mpdb';
// console.log(connectionString);
var massive = massive.connectSync({ connectionString: connectionString})
//add your connection to express
app.set('./server/db', massive);
//declare a db object for requests
var db = app.get('db');
///////////////
// endpoints //
//////////////
app.get('/api/products/',mainCtrl.getProductsCategory);
app.listen(config.port, function(){
  console.log('listening to port: ',config.port);
});
