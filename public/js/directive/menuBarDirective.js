myApp.directive('menuDirect',function(productSrvc){
  return {
    restrict: 'EA',
    templateUrl: '../../templates/menuBar.html',
    link: function (scope,element,attribute){
      // productSrvc.getCart().then(function(res){
      //   scope.cartCount = res.length;
      //   console.log('cartCount',res.length);
      // })
    },
  };
});//closing
