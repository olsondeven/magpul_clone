myApp.controller('productCtrl',function($scope,$state,$stateParams,$sce,productSrvc){
  $scope.test = 'PMAG\xAE 30 AK/AKM MOE\xAE';
  $scope.category = $stateParams.category;
  $scope.subcategory = $stateParams.subcategory.toUpperCase();
  productSrvc.getProductList($stateParams.subcategory).then((res)=>{
    $scope.products = res;
    // console.log($scope.test);
    // console.log($scope.products[0]);
  });
});//closing
