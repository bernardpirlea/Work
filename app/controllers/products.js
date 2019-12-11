exports.displayAll = async function (req, res) {
    var _ = require("underscore");
    const Categories = require("../models/Categories");
    const Products = require("../models/Products");

    var id  = req.params.category + "-" + req.params.subcategory + "-" + req.params.select ;

    var breadcrumb = [];
	breadcrumb.push(req.params.category);
    breadcrumb.push(req.params.subcategory);
    breadcrumb.push(req.params.select);

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
            title: "Shop",
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
            
            title: "Shop",
            items: categoriesHeader,
            breadcrumb: breadcrumb,
            image: image,
            product: product
        });
    });
};