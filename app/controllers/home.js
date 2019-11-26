exports.index = function(req, res) {

	var _         = require("underscore");
	const Categories = require("../models/Categories");

	const categories = Categories.find({}, function(err, items) {
        if (err)
			res.send(err);
		res.render("index", { 
			// Underscore.js lib
			_     : _, 
				
			// Template data
			title : "Hello World!",
			items : items,
			mainCategory: 0,
			categories : items
		});
    });;
};
