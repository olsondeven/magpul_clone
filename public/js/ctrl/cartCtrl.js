myApp.controller('cartCtrl',function($scope,cartSrvc){
  $scope.copyright = '\xAE';
  $scope.cart = cartSrvc.getCart();
  // $scope.cart.forEach((element,index)=>{
  //   element.total = (element.quantity * element.price).toFixed(2);
  // });

  $scope.cartUpdate = (num,index)=>{
    console.log('cart index num', index, num);
    if(!num){
      return;
    }else{
      // console.log('cartUpdate fired');
      $scope.cart[index].quantity = num;
      $scope.cart[index].total = num*$scope.cart[index].price;
      // console.log('new quantity', $scope.cart[index]);
      cartSrvc.updateCart($scope.cart);
      return swal('Updated');
    }
  }
  
});//closing
