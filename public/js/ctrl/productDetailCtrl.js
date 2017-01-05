myApp.controller('productDetailCtrl',function($scope,$state,$stateParams,$sce,productSrvc){
  $scope.test = $stateParams.id;
  productSrvc.getProductId($stateParams.id).then(function(res){
    console.log(res);
  });
  // console.log($stateParams.id);
});//closing
