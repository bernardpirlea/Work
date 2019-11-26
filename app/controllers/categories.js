exports.subcategories = async function(req, res) {
	var _         = require("underscore");
	const Categories = require("../models/Categories");

	const categoryChoice = req.url.split("/");
	const categoriesHeader = await Categories.find({});


	if(categoryChoice.length <= 2){
		const categories = Categories.findOne({id: categoryChoice[1]},  function(err, items) {
			if (err)
				res.send(err);
			var subcategories = items.categories;

			res.render("index", { 
				// Underscore.js lib
				_     : _, 
					
				// Template data
				title : "Subcategories",
				items: categoriesHeader,
				mainCategory: items,
				categories : subcategories
			});
		});;
	}
	else{
		const categories = Categories.findOne({id: categoryChoice[1]},  function(err, items) {
			if (err)
				res.send(err);
			var subcategories = items.categories;
			for(var i = 0; i < subcategories.length; i++){
				if(subcategories[i].id == categoryChoice[1] + '-' + categoryChoice[2]) {
					var sub = subcategories[i].categories;
					var mainCategory = subcategories[i];
				}
			}
			
			res.render("index", { 
				// Underscore.js lib
				_     : _, 
					
				// Template data
				title : "Subcategories",
				items: categoriesHeader,
				mainCategory: mainCategory,
				categories : sub
			});
		});;
	}
};