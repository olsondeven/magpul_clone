'use strict';

var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './templates/home.html',
    controller: 'homeCtrl'
  }).state('product', {
    url: '/product/:category/:subcategory',
    templateUrl: './templates/product.html',
    controller: 'productCtrl'
  }).state('productDetail', {
    url: '/product/:id',
    templateUrl: './templates/productDetails.html',
    controller: 'productDetailCtrl'
  }).state('cart', {
    url: '/cart',
    templateUrl: './templates/cart.html',
    controller: 'cartCtrl'
  });
}); //closing
'use strict';

myApp.controller('cartCtrl', function ($scope, cartSrvc) {
  $scope.copyright = '\xAE';
  $scope.cart = cartSrvc.getCart();
  $scope.cart.forEach(function (element, index) {
    element.total = (element.quantity * element.price).toFixed(2);
  });
  $scope.cartUpdate = function (num) {};
}); //closing
'use strict';

myApp.controller('homeCtrl', function ($scope, mainSrvc) {
  // $scope.test = 'PMAG\xAE 30 AK/AKM GEN M3\u2122';
}); //closing
'use strict';

myApp.controller('productCtrl', function ($scope, $state, $stateParams, $sce, productSrvc) {
  $scope.test = 'PMAG\xAE 30 AK/AKM MOE\xAE';
  $scope.category = $stateParams.category;
  $scope.subcategory = $stateParams.subcategory.toUpperCase();
  productSrvc.getProductList($stateParams.subcategory).then(function (res) {
    $scope.products = res;
    // console.log($scope.test);
    // console.log($scope.products[0]);
  });
}); //closing
"use strict";

myApp.controller('productDetailCtrl', function ($scope, $state, $stateParams, $sce, productSrvc) {
  $scope.colorFn = function (str) {
    if (str === "black") {
      $scope.color = "BLACK";
      // console.log('fn fired', $scope.color);
    } else if (str === 'sand') {
      $scope.color = "SAND";
      $scope.colorImg = '';
      // console.log('fn fired', $scope.color);
    }
  };
  $scope.copyright = '\xAE';
  $scope.test = $stateParams.id;
  productSrvc.getProductId($stateParams.id).then(function (res) {
    // console.log(res);
    $scope.productData = res;
    // console.log($scope.productData[0].mainimg);
    $scope.productData[0].subcategory = $scope.productData[0].subcategory.toUpperCase();
  });
  // console.log($stateParams.id);
  $scope.addToShoppingCart = function (i, p) {
    // console.log('fn fired',i,q,p);
    if (!$scope.color) {
      return swal('Please select a color');
      // return alert('Please select color');
    }
    if (!$scope.quantity) {
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
    };
    if ($scope.quantity && $scope.color) {
      // console.log('front end ctrl fired',product);
      productSrvc.addToCart(product);
    }
  };
}); //closing
'use strict';

myApp.directive('carouselDirect', function () {
  return {
    restrict: 'EA',
    templateUrl: './js/directive/carousel.html',
    controller: function controller($scope) {
      $scope.myInterval = 3000;
      $scope.slides = [{
        image: 'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/PRS_GEN3_Carousel.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
        text: 'PRS GEN3 STOCK'
      }, {
        image: 'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/Hats.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
        text: 'MAGPUL HATS'
      }, {
        image: 'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/SL-SCarousel.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
        text: 'MOE SL-S CARBINE STOCK'
      }, {
        image: 'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/HunterTakedown.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
        text: 'HUNTER SERIES STOCKS AND ACCESSORIES'
      }, {
        image: 'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/Glock21.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
        text: 'PMAG 21 GL9'
      }];
    }
  };
});
'use strict';

myApp.directive('footerDirect', function () {
  return {
    restrict: 'EA',
    templateUrl: '../../templates/footer.html',
    link: function link(scope, element, attribute) {}
  };
}); //closing
'use strict';

myApp.directive('menuDirect', function (productSrvc) {
  return {
    restrict: 'EA',
    templateUrl: '../../templates/menuBar.html',
    link: function link(scope, element, attribute) {
      // productSrvc.getCart().then(function(res){
      //   scope.cartCount = res.length;
      //   console.log('cartCount',res.length);
      // })
    }
  };
}); //closing
'use strict';

myApp.service('cartSrvc', function ($http) {
  // const cart = [];
  this.getCart = function () {
    if (!localStorage.getItem('cart')) {
      return false;
    } else {
      var _cart = JSON.parse(localStorage.getItem('cart'));
      console.log('cartSrvc', _cart);
      return _cart;
    }
    // return cart.slice();
  };
  this.addToCart = function (productObj) {
    cart.push(productObj);
    //foreach if id is there at one to quantity
    //update backend table
    //update localStorage dollar localStorage
  };
  this.removeFromCart = function (id) {
    //prototype find id splice
    //update backend table
    //update localStorage
  };
});
'use strict';

myApp.service('mainSrvc', function () {});
'use strict';

myApp.service('productSrvc', function ($http) {
  this.getProductList = function (subcategory) {
    return $http({
      method: 'GET',
      url: '/api/products/' + subcategory
    }).then(function (res) {
      var arr = splitDollarArr(res.data);
      return arr;
    });
  };
  this.getProductId = function (id) {
    // console.log('fn fired');
    return $http({
      method: 'GET',
      url: '/api/products/?id=' + id
    }).then(function (res) {
      // console.log('id res',res.data);
      var arr = splitDollarArr(res.data);
      return arr;
    });
  };
  ///Cart ///////////////////////////////////////////////////
  ///Cart ///////////////////////////////////////////////////
  this.addToCart = function (obj) {
    // console.log('srvc obj', obj);
    if (!localStorage.getItem('cart')) {
      var cart = [];
      cart.push(obj);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      var _cart = JSON.parse(localStorage.getItem('cart'));
      var present = void 0;
      _cart.forEach(function (element, index) {
        if (element.id === obj.id && element.color === obj.color) {
          element.quantity += obj.quantity;
          present = true;
        }
      });
      if (!present) {
        _cart.push(obj);
      }
      localStorage.cart = JSON.stringify(_cart);
      console.log('localStorage', _cart);
    }
    return swal('Item add to cart');
  };
}); //closing
var splitDollarArr = function splitDollarArr(arr) {
  var arrKey = ['features', 'details', 'specs', 'color'];
  arr.forEach(function (object, index) {
    arrKey.forEach(function (key, i) {
      if (object[key] && object[key].match(/(\\\$)/gi)) {
        object[key] = object[key].split(/\\\$/gi);
      } else {
        var arrNew = [];
        arrNew.push(object[key]);
        object[key] = arrNew;
      }
    });
  });
  return arr;
};

var splitDollarObj = function splitDollarObj(obj) {
  var arrKey = ['features', 'details', 'specs', 'color'];
  arrKey.forEach(function (key, i) {
    if (obj[key] && obj[key].match(/(\\\$)/gi)) {
      obj[key] = obj[key].split(/\\\$/gi);
    } else {
      var arrNew = [];
      arrNew.push(obj[key]);
      obj[key] = arrNew;
    }
  });
  return arr;
};
//# sourceMappingURL=bundle.js.map
