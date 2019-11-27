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
    app.get("/mens/clothing/dress/shirts", productsController.displayAll);
    app.get("/mens/clothing/shorts", productsController.displayAll);
    app.get("/mens/clothing/pants", productsController.displayAll);
    app.get("/mens/accessories/ties", productsController.displayAll);
    app.get("/mens/accessories/gloves", productsController.displayAll);
    app.get("/mens/accessories/luggage", productsController.displayAll);
    app.get("/womens/clothing/tops", productsController.displayAll);
    app.get("/womens/clothing/dresses", productsController.displayAll);
    app.get("/womens/clothing/bottoms", productsController.displayAll);
    app.get("/womens/clothing/jackets", productsController.displayAll);
    app.get("/womens/jewelry/earrings", productsController.displayAll);
    app.get("/womens/jewlery/bracelets", productsController.displayAll);
    app.get("/womens/jewelry/necklaces", productsController.displayAll);
    app.get("/womens/accessories/scarves", productsController.displayAll);
    app.get("/womens/accessories/shoes", productsController.displayAll);
    app.get("/:id", productsController.productDetail);
}
