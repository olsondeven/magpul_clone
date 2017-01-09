myApp.controller('cartCtrl',function($scope,cartSrvc,$rootScope){
  $scope.cart = cartSrvc.getCart();
  let cartTotalFn = function(){
    let total = 0;

    $scope.cart.forEach(function(element, index){
      total = (total + parseFloat(element.total));
      console.log((total + parseFloat(element.total)))
      // total = parseInt(total).toFixed(2);
    });
    console.log('fired sub-total', total);
    return total;
  }
  $scope.subTotal = cartTotalFn();
  $scope.copyright = '\xAE';

  $scope.cart.forEach((element,index)=>{
    element.total = (element.quantity * element.price);
    $scope.subTotal = cartTotalFn();
  });

  $scope.cartUpdate = (num,index)=>{
    console.log('cart index num', index, num);
    if(!num){
      return;
    }else{
      num = parseInt(num);
      console.log('cartUpdate fired',num);
      $scope.cart[index].quantity = parseInt(num);
      $scope.cart[index].total = num*$scope.cart[index].price;
      // console.log('new quantity', $scope.cart[index]);
      cartSrvc.updateCart($scope.cart);
      $scope.subTotal = cartTotalFn();
      $rootScope.$broadcast('cartCount');
      return swal('Updated');
    }
  }
  $scope.cartRemove = (index)=>{
    $scope.cart.splice(index,1);
    cartSrvc.updateCart($scope.cart);
    $scope.subTotal = cartTotalFn();
  }
  $scope.subTotal = cartTotalFn();
});//closing
