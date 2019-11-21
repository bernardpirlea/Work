exports.index = function(req, res) {

	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;
	
	mdbClient.connect("mongodb+srv://user1:user1@osfdb-ddrde.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true}, function(err, client) {
		var collection = client.db("shop").collection('categories');
		
		collection.find().toArray(function(err, items) {
			res.render("index", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
			});

			client.close();
		});
	});
};

exports.home = async function(req, res) {
	var _         = require("underscore");
	const Categories = require("../models/Categories");

	const categories = Categories.find({}, function(err, items) {
        if (err)
			res.send(err);
		res.render("home", { 
			// Underscore.js lib
			_     : _, 
				
			// Template data
			title : "Hello World!",
			items : items
		});
    });;
};
