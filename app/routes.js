var homeController = require('./controllers/home');
var categoriesController = require("./controllers/categories");
var productsController = require("./controllers/products");
var currencyController = require("./controllers/currency");
//you can include all your controllers

module.exports = function (app) {

    app.get("/"    , homeController.index);
    app.get("/product/:id", productsController.productDetail);
    app.get("/:category", categoriesController.categories);
    app.get("/:category/:subcategory", categoriesController.subcategories)
    app.get("/:category/:subcategory/:select", productsController.displayAll)
    app.get("/product/:id", productsController.productDetail);
    app.post("/currency", currencyController.convert);
}
