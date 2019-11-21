const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "categories": {
      "type": [
        "Mixed"
      ]
    },
    "id": {
      "type": "String"
    },
    "name": {
      "type": "String"
    },
    "page_description": {
      "type": "String"
    },
    "page_title": {
      "type": "String"
    },
    "parent_category_id": {
      "type": "String"
    },
    "c_showInMenu": {
      "type": "Boolean"
    }
});

module.exports = mongoose.model("categories", CategoriesSchema, 'categories');

