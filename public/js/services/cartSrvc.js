myApp.service('cartSrvc',function($http,$rootScope){
  // const cart = [];
  this.getCart = function(){
    if(!localStorage.getItem('cart')){
      return false;
    }else {
      let cart = JSON.parse(localStorage.getItem('cart'));
      // console.log('cartSrvc',cart);
      return cart;
    }
    // return cart.slice();
  }
  this.updateCart = (arr)=>{
    // console.log('srvc',arr)
    localStorage.cart = JSON.stringify(arr);
    $rootScope.$broadcast('cartCount');
  }
  // this.addToCart = function(productObj){
  //   cart.push(productObj);
  //   //foreach if id is there at one to quantity
  //   //update backend table
  //   //update localStorage dollar localStorage
  // }
  this.removeFromCart = function(id){
    //prototype find id splice
    //update backend table
    //update localStorage
  }
});
