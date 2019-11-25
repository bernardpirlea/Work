var homeController = require('../app/controllers/home');
var menController = require("../app/controllers/men");
var womenController = require("../app/controllers/women");
//you can include all your controllers

module.exports = function (app) {

    app.get("/"    , homeController.index);
    app.get("/men", menController.subcategories);
    app.get("/women", womenController.subcategories);
}
