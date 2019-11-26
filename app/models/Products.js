const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "page_description": {
      "type": "String"
    },
    "page_title": {
      "type": "String"
    },
    "name": {
      "type": "String"
    },
    "c_isNewtest": {
      "type": "Boolean"
    },
    "price": {
      "$numberInt": {
        "type": "Date"
      }
    },
    "variation_attributes": {
      "type": [
        "Mixed"
      ]
    },
    "id": {
      "type": "String"
    },
    "currency": {
      "type": "String"
    },
    "master": {
      "orderable": {
        "type": "Boolean"
      },
      "price": {
        "$numberInt": {
          "type": "Date"
        }
      },
      "master_id": {
        "type": "String"
      }
    },
    "primary_category_id": {
      "type": "String"
    },
    "image_groups": {
      "type": [
        "Mixed"
      ]
    },
    "c_isNew": {
      "type": "Boolean"
    },
    "short_description": {
      "type": "String"
    },
    "orderable": {
      "type": "Boolean"
    },
    "variants": {
      "type": [
        "Mixed"
      ]
    },
    "type": {
      "master": {
        "type": "Boolean"
      }
    },
    "long_description": {
      "type": "String"
    },
    "c_isSale": {
      "type": "Boolean"
    }
  });

module.exports = mongoose.model("products", ProductsSchema, 'products');
