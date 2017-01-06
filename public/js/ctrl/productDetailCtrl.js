myApp.controller('productDetailCtrl',function($scope,$state,$stateParams,$sce,productSrvc){
  $scope.colorFn = function(str){
    if(str === "black"){
      $scope.color = "BLACK";
      console.log('fn fired', $scope.color);
    }else if(str === 'sand'){
      $scope.color = "SAND";
      $scope.colorImg = ''
      console.log('fn fired', $scope.color);
    }
  };
  $scope.copyright = '\xAE';
  $scope.test = $stateParams.id;
  productSrvc.getProductId($stateParams.id).then(function(res){
    // console.log(res);
    $scope.productData = res;
    $scope.productData[0].subcategory = $scope.productData[0].subcategory.toUpperCase();
  });
  // console.log($stateParams.id);
});//closing
