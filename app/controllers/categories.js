exports.subcategories = async function (req, res) {
	var _ = require("underscore");
	const Categories = require("../models/Categories");

	const categoryChoice = req.url.split("/");
	categoryChoice.splice(0,1);
	var breadcrumb = categoryChoice;
	const categoriesHeader = await Categories.find({});

	const categories = Categories.findOne({ id: categoryChoice[0] }, function (err, items) {
		if (err)
			res.send(err);
		var subcategories = items.categories;
		for (var i = 0; i < subcategories.length; i++) {
			if (subcategories[i].id == categoryChoice[0] + '-' + categoryChoice[1]) {
				var sub = subcategories[i].categories;
				var mainCategory = subcategories[i];
			}
		}

		res.render("index", {
			// Underscore.js lib
			_: _,

			// Template data
			title: "Subcategories",
			items: categoriesHeader,
			breadcrumb: breadcrumb,
			mainCategory: mainCategory,
			categories: sub
		});
	});;
};
exports.categories = async function (req, res) {
	var _ = require("underscore");
	const Categories = require("../models/Categories");

	const categoryChoice = req.url.split("/");
	categoryChoice.splice(0,1);
	var breadcrumb = categoryChoice;
	const categoriesHeader = await Categories.find({});

	const categories = Categories.findOne({ id: categoryChoice[0] }, function (err, items) {
		if (err)
			res.send(err);
		var subcategories = items.categories;

		res.render("index", {
			// Underscore.js lib
			_: _,

			// Template data
			title: "Subcategories",
			items: categoriesHeader,
			breadcrumb: breadcrumb,
			mainCategory: items,
			categories: subcategories
		});
	});;
};