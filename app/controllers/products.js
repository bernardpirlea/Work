exports.displayAll = async function (req, res) {
    var _ = require("underscore");
    const Categories = require("../models/Categories");
    const Products = require("../models/Products");

    const categoryChoice = req.url.split("/");
    var id = categoryChoice[1];
    for(i = 2; i < categoryChoice.length; i++){
        id = id + "-" + categoryChoice[i];
    }

    categoryChoice.splice(0,1);
	var breadcrumb = categoryChoice;

    const categoriesHeader = await Categories.find({});

    const prod = Products.find({primary_category_id: id}, function (err, products) {
        if (err)
            res.send(err);
        var images = new Map();
        products.forEach(element =>  {
                element.image_groups.forEach(sube =>{
                    if(sube.view_type == 'medium' && !images.has(element.id)){
                        images.set(element.id, sube.images[0].link);
                    }
                });
        });
        res.render("subcategory", {
            // Underscore.js lib
            _: _,

            // Template data
            title: "Products",
            items: categoriesHeader,
            breadcrumb: breadcrumb,
            images: images,
            products: products
        });
    });
};

exports.productDetail = async function (req, res){
    var _ = require("underscore");
    const Categories = require("../models/Categories");
    const Products = require("../models/Products");

    const categoriesHeader = await Categories.find({});

    const p = Products.findById(req.params.id, function (err, product){
        
        var image;
        product.image_groups.forEach(element =>{
            if(element.view_type == 'large'){
                image = element.images[0].link;
            }
        });
        
        var categoryChoice = product.primary_category_id;
        var breadcrumb = categoryChoice.split("-");
        breadcrumb.push(product._id);
        
        res.render("product", {
            // Underscore.js lib
            _: _,
            
            title: "Product",
            items: categoriesHeader,
            breadcrumb: breadcrumb,
            image: image,
            product: product
        });
    });

    
};