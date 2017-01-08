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
      let arr = splitDollarArr(res.data);
      return arr;
    });
  }
///Cart ///////////////////////////////////////////////////
///Cart ///////////////////////////////////////////////////
this.addToCart = (obj)=>{
  // console.log('srvc obj', obj);
  if(!localStorage.getItem('cart')){
    let cart = [];
    cart.push(obj);
    cart.forEach((element,index)=>{
      element.total = (element.quantity * element.price).toFixed(2);
    });
    localStorage.setItem('cart',JSON.stringify(cart));
  }else{
    let cart = JSON.parse(localStorage.getItem('cart'));
    let present;
    cart.forEach((element,index)=>{
      if(element.id === obj.id && element.color === obj.color){
        element.quantity += obj.quantity;
        element.total = (element.quantity * element.price).toFixed(2);
        present = true;
      }
    });
    if(!present){
      cart.push(obj);
    }
    localStorage.cart = JSON.stringify(cart);
    console.log('localStorage',cart);
  }
  return swal('Item add to cart');
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
