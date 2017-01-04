myApp.service('productSrvc',function($http){
  this.getProductList = function(category,subcategory){
    return $http({
      method: 'GET',
      url: '/api/products/'+subcategory
    }).then(function(res){
      console.log('productSrvc',res.status,'\n\nData',res.data);
    });
  }
});//closing
