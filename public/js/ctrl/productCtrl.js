myApp.controller('productCtrl',function($scope,$state,$stateParams,productSrvc){
$scope.category = $stateParams.category;
$scope.subcategory = $stateParams.subcategory;
productSrvc.getProductList($stateParams.category,$stateParams.subcategory);
});//closing
