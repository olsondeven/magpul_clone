const mainSrvc = require('./mainSrvc.js');
const app = require('../server.js');
const db = app.get('db');
module.exports = {
  get: function(endpoint){
    return function(req, res, next){
      // console.log(req.params);
      // console.log(req.query);
      //query for certain subcategory by ID
      if(req.params.subcategory === 'PMAG Magazines'){
        db.run(`select * from ${endpoint} where subCategory=${req.params.category}`, function(err, products){
          if(err){
            // console.log(err);
            return res.status(500).send(err);
          }
          // console.log("products shown");
          return res.status(200).send(products);
        });
      }
      //endpoint for all products
      if (endpoint === 'products') {
        db.run(`select * from ${endpoint}`, function(err, products){
          if(err){
            // console.log(err);
            return res.status(500).send(err);
          }
          // console.log("products shown");
          return res.status(200).send(products);
        });
      }
    }
  },
  // getOne:
};
