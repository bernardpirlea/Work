exports.subcategories = async function(req, res) {
	var _         = require("underscore");
	const Categories = require("../models/Categories");

	const categoriesHeader = await Categories.find({});
	//console.log(categoriesHeader);

	const categories = Categories.findOne({name: 'Womens'},  function(err, items) {
        if (err)
			res.send(err);

		var subcategories = items.categories;
		res.render("index", { 
			// Underscore.js lib
			_     : _, 
				
			// Template data
			title : "Subcategories",
			items: categoriesHeader,
			categories : subcategories
		});
    });;
};