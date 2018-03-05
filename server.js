//Require modules
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var session = require( 'express-session' );
var mongoose = require('mongoose');
var bodyParser = require( 'body-parser' );

//Other server configs
app.use(bodyParser.json());
app.use(express.static( __dirname + '/mainApp/dist'));
app.use(session({secret: "SecretOfTheSecret"}));

//Mongoose/MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mean_qanda_api');
require('./server/config/mongoose.js');

//Load routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

//Listen to server
app.listen(8000, function(){
    console.log("Listening to 8000");
})