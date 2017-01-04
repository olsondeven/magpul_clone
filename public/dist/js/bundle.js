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
    controller: 'porductDetailCtrl'
  }).state('cart', {
    url: '/cart',
    templateUrl: './templates/cart.html',
    controller: 'cartCtrl'
  }).state('editCart', {
    url: '/edit-cart',
    templateUrl: '.templates/editCart.html',
    controller: 'editCartCtrl'
  });
}); //closing
'use strict';

myApp.controller('cartCtrl', function ($scope, mainSrvc) {
  // $scope.test = 'Please be workiing';
}); //closing
'use strict';

myApp.controller('editCartCtrl', function ($scope, mainSrvc) {
  $scope.test = 'Please be workiing';
}); //closing
'use strict';

myApp.controller('homeCtrl', function ($scope, mainSrvc) {
  // $scope.test = 'PMAG\xAE 30 AK/AKM GEN M3\u2122';
}); //closing
'use strict';

myApp.controller('productCtrl', function ($scope, $state, $stateParams, mainSrvc) {
  $scope.category = $stateParams.category;
  $scope.subcategory = $stateParams.subcategory;
}); //closing
'use strict';

myApp.controller('productDetailCtrl', function ($scope, mainSrvc) {
  // $scope.test = 'Please be workiing';
}); //closing
'use strict';

myApp.directive('carouselDirect', function () {
  return {
    restrict: 'EA',
    templateUrl: './js/directive/carousel.html',
    controller: function controller($scope) {
      $scope.myInterval = 4000;
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
    link: function link(scope, element, attribute) {},
    ctrl: function ctrl($scope) {}
  };
}); //closing
'use strict';

myApp.directive('menuDirect', function () {
  return {
    restrict: 'EA',
    templateUrl: '../../templates/menuBar.html',
    link: function link(scope, element, attribute) {},
    controller: function controller($scope) {}
  };
}); //closing
'use strict';

myApp.service('mainSrvc', function () {});
//# sourceMappingURL=bundle.js.map
