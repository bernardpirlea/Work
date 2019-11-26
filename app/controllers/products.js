exports.displayAll = async function (req, res) {
    var _ = require("underscore");
    const Categories = require("../models/Categories");
    const Products = require("../models/Products");

    const categoryChoice = req.url.split("/");
    var id = categoryChoice[1];
    for(i = 2; i < categoryChoice.length; i++){
        id = id + "-" + categoryChoice[i];
    }

    const categoriesHeader = await Categories.find({});

    const prod = Products.find({primary_category_id: id}, function (err, products) {
        if (err)
            res.send(err);
        var images = new Map();
        products.forEach(element =>  {
                element.image_groups.forEach(sube =>{
                    if(sube.view_type == 'large' && sube.variation_value){
                        images.set(element.id, sube.images[0].link);
                    }
                });
                
            });
        res.render("products", {
            // Underscore.js lib
            _: _,

            // Template data
            title: "Products",
            items: categoriesHeader,
            images: images,
            products: products
        });
    });
};