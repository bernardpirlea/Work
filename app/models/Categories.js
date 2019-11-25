const mongoose = require('mongoose');

const subsubCategoriesSchema = mongoose.Schema({
  "id": {
    "type": "String"
  },
  "image": {
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

const subCategoriesSchema = mongoose.Schema({
    "categories": [subsubCategoriesSchema],
    "id": {
      "type": "String"
    },
    "image": {
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

const CategoriesSchema = mongoose.Schema({
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "categories":  [subCategoriesSchema],
    
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
