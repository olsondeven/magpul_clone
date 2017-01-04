myApp.controller('productCtrl',function($scope,$state,$stateParams,productSrvc){
$scope.category = $stateParams.category;
$scope.subcategory = $stateParams.subcategory.toUpperCase();
productSrvc.getProductList($stateParams.subcategory).then((res)=>{
  $scope.Magazines = res;
});
});//closing
