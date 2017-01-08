myApp.controller('cartCtrl',function($scope,cartSrvc){
  $scope.copyright = '\xAE';
  $scope.cart = cartSrvc.getCart();
  $scope.cart.forEach((element,index)=>{
    element.total = (element.quantity * element.price).toFixed(2);
  });
  $scope.cartUpdate = (num)=>{

  }
});//closing
