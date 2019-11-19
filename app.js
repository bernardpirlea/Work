
var app     = express();

// All environments
app.set("port", 80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.errorHandler());

// App routes
app.get("/"     , routes.index);
app.get("/hello", routes.hello);

// Run server
http.createServer(app).listen(app.get("port"), function() {
	console.log("Express server listening on port " + app.get("port"));
});
