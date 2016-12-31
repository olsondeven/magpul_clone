const mainSrvc = require('./mainSrvc.js');
const app = require('../server.js');
// console.log(db);
// const db = app.get('db');
module.exports = {
  getProductsCategory: function(req, res, next){
    app.db.get.get_products_category([], function(err, products){
      if(err){
        // console.log(err);
        return res.status(500).send(err);
      }
      // console.log("products shown");
      return res.status(200).send(products);
    })
  }
};
