const mainSrvc = require('./mainSrvc.js');
const db = require('./db')
module.exports = {
  getProductsCategory: function(req, res, next){
    db.get_products_category([req.params.category], function(err, products){
      if(err){
        // console.log(err);
        return res.status(500).send(err);
      }
      // console.log("products shown");
      return res.status(200).send(products);
    })
  }
};
