var homeController = require('../app/controllers/home');

//you can include all your controllers

module.exports = function (app) {

    app.get("/"    , homeController.index);
    app.get("/home", homeController.home);

}
