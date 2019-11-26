var homeController = require('../app/controllers/home');
var categoriesController = require("../app/controllers/categories");
var productsController = require("../app/controllers/products");
//you can include all your controllers

module.exports = function (app) {

    app.get("/"    , homeController.index);
    app.get("/mens", categoriesController.subcategories);
    app.get("/womens", categoriesController.subcategories);
    app.get("/mens/clothing", categoriesController.subcategories);
    app.get("/mens/accessories", categoriesController.subcategories);
    app.get("/womens/clothing", categoriesController.subcategories);
    app.get("/womens/accessories", categoriesController.subcategories);
    app.get("/womens/jewelry", categoriesController.subcategories);
    app.get("/mens/clothing/suits", productsController.displayAll);
    app.get("/mens/clothing/jackets", productsController.displayAll);
}
