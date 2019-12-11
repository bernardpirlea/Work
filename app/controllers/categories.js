exports.subcategories = async function (req, res) {
	var _ = require("underscore");
	const Categories = require("../models/Categories");

	var breadcrumb = [];
	breadcrumb.push(req.params.category);
	breadcrumb.push(req.params.subcategory);

	const categoriesHeader = await Categories.find({});

	const categories = Categories.findOne({ id: req.params.category}, function (err, items) {
		if (err)
			res.send(err);
		var subcategories = items.categories;
		for (var i = 0; i < subcategories.length; i++) {
			if (subcategories[i].id == req.params.category + '-' + req.params.subcategory) {
				var sub = subcategories[i].categories;
				var mainCategory = subcategories[i];
			}
		}

		res.render("index", {
			// Underscore.js lib
			_: _,

			// Template data
			title: "Shop",
			items: categoriesHeader,
			breadcrumb: breadcrumb,
			mainCategory: mainCategory,
			categories: sub
		});
	});
};
exports.categories = async function (req, res) {
	var _ = require("underscore");
	const Categories = require("../models/Categories");

	var breadcrumb = [];
	breadcrumb.push(req.params.category);
	const categoriesHeader = await Categories.find({});

	const categories = Categories.findOne({ id: req.params.category }, function (err, items) {
		if (err)
			res.send(err);
		var subcategories = items.categories;

		res.render("index", {
			// Underscore.js lib
			_: _,

			// Template data
			title: "Shop",
			items: categoriesHeader,
			breadcrumb: breadcrumb,
			mainCategory: items,
			categories: subcategories
		});
	});;
};