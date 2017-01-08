myApp.controller('productDetailCtrl',function($scope,$state,$stateParams,$sce,productSrvc){
  $scope.colorFn = function(str){
    if(str === "black"){
      $scope.color = "BLACK";
      // console.log('fn fired', $scope.color);
    }else if(str === 'sand'){
      $scope.color = "SAND";
      $scope.colorImg = ''
      // console.log('fn fired', $scope.color);
    }
  };
  $scope.copyright = '\xAE';
  $scope.test = $stateParams.id;
  productSrvc.getProductId($stateParams.id).then(function(res){
    // console.log(res);
    $scope.productData = res;
    // console.log($scope.productData[0].mainimg);
    $scope.productData[0].subcategory = $scope.productData[0].subcategory.toUpperCase();
  });
  // console.log($stateParams.id);
  $scope.addToShoppingCart = (i,p)=>{
    // console.log('fn fired',i,q,p);
    if(!$scope.color){
      return swal('Please select a color');
      // return alert('Please select color');
    }
    if(!$scope.quantity){
      $scope.quantity = 1;
    }
      var product = {
        id: i,
        name: $scope.productData[0].name,
        caliber: $scope.productData[0].caliber,
        modelNumber: $scope.productData[0].modelNumber,
        quantity: parseInt($scope.quantity),
        price: parseFloat(p),
        color: $scope.color,
        img: $scope.productData[0].mainimg,
        new: $scope.productData[0].new
    }
    if($scope.quantity && $scope.color){
      // console.log('front end ctrl fired',product);
      productSrvc.addToCart(product);
      $scope.quantity = null;
    }
  }
});//closing
