myApp.service('productSrvc',function($http){
  this.getProductList = function(subcategory){
    return $http({
      method: 'GET',
      url: `/api/products/${subcategory}`
    }).then(function(res){
      var arr = splitDollar(res.data);
      return arr;
    });
  }
});//closing
let splitDollar = function(arr){
  let arrKey = ['features','details','specs','color'];
  arr.forEach((object,index)=>{
    arrKey.forEach((key,i)=>{
      if((object[key]) && object[key].match(/(\\\$)/gi)){
        object[key] = object[key].split(/\\\$/gi);
      }else{
        let arrNew = [];
        arrNew.push(object[key]);
        object[key] = arrNew;
      }
    })
  });
  return arr;
};
