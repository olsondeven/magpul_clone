myApp.service('productSrvc',function($http){
  this.getProductList = function(subcategory){
    return $http({
      method: 'GET',
      url: `/api/products/${subcategory}`
    }).then(function(res){
      var arr = splitDollarArr(res.data);
      return arr;
    });
  }
  this.getProductId = function(id){
    // console.log('fn fired');
    return $http({
      method: 'GET',
      url: `/api/products/?id=${id}`
    }).then(function(res){
      // console.log('id res',res.data);
      var arr = splitDollarArr(res.data);
      return arr;
    });
  }
  this.postCart = function(proObj){
    console.log('fn fired srvc', proObj);
    return $http ({
      method: 'POST',
      url: '/api/cart',
      data: proObj
    }).then(function(res){
      console.log(res.data);
      // return res.data;
    });
  }
});//closing
let splitDollarArr = function(arr){
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

let splitDollarObj = function(obj){
  let arrKey = ['features','details','specs','color'];
  arrKey.forEach((key,i)=>{
    if((obj[key]) && obj[key].match(/(\\\$)/gi)){
      obj[key] = obj[key].split(/\\\$/gi);
    }else{
      let arrNew = [];
      arrNew.push(obj[key]);
      obj[key] = arrNew;
    }
  })
  return arr;
};
