var express = require("express")
  , http    = require("http")
  , path    = require("path")
  , expressLayouts = require("express-ejs-layouts");

var app = express();
app.use(expressLayouts);

// All environments
app.set("port", 80);
app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(express.session());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.errorHandler());
/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
//configuration ===============================================================
mongoose.connect(configDB.url, { useNewUrlParser: true , dbName: 'shop', useUnifiedTopology: true}, () => console.log("Connected to DB")); // connect to our database
require('./routes.js')(app);


// Run server
http.createServer(app).listen(app.get("port"), function() {
	console.log("Express server listening on port " + app.get("port"));
});