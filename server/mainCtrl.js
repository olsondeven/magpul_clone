const mainSrvc = require('./mainSrvc.js');
const app = require('../server.js');
const db = app.get('db');
module.exports = {
  get: function(endpoint){
    return function(req, res, next){
      console.log('params',req.params);
      console.log('query',req.query);

      // query for certain subcategory by ID
      if(req.params.subCategory === 'PMAG Magazines'){
        db.run(`select * from products where subCategory='PMAG Magazines'`, (err, subCategory)=>{
          if(err){
            // console.log(err);
            return res.status(500).send(err);
          }
            // console.log("products shown");
            return res.status(200).send(subCategory);
        });
      }
      //endpoint for all products
      if (endpoint === 'products' && req.pramas === false && req.query === false) {
        db.run(`select * from ${endpoint}`, (err, products)=>{
          if(err){
            // console.log(err);
            return res.status(500).send(err);
          }
          // console.log("products shown");
          return res.status(200).send(products);
        });
      }
    }
  }
};
