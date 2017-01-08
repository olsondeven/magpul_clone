myApp.directive('menuDirect',function(productSrvc){
  return {
    restrict: 'EA',
    templateUrl: '../../templates/menuBar.html',
    link: function (scope,element,attribute){
      // productSrvc.getCart().then(function(res){
      //   scope.cartCount = res.length;
      //   console.log('cartCount',res.length);
      // })
      // scope.cartCount = (productSrvc.getCart()).length;
    },
    controller: function($scope,cartSrvc){

      let fireFn = ()=>{
        $scope.cartCount = cartSrvc.getCart().reduce((prev, curr)=>{
          return prev + curr.quantity;
        },0);
      }

      $scope.$on('cartCount',(event, args)=>{
        fireFn();
      });
      fireFn();
    }
  };
});//closing
