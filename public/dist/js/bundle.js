'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './templates/home.html',
    controller: 'homeCtrl'
  }).state('product', {
    url: '/product',
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
    ctrl: function ctrl($scope) {}
  };
}); //closing
'use strict';

myApp.controller('cartCtrl', function ($scope, mainSrvc) {
  $scope.test = 'Please be workiing';
}); //closing
'use strict';

myApp.controller('editCartCtrl', function ($scope, mainSrvc) {
  $scope.test = 'Please be workiing';
}); //closing
'use strict';

myApp.controller('homeCtrl', function ($scope, mainSrvc) {
  $scope.test = 'PMAG\xAE 30 AK/AKM GEN M3\u2122';
}); //closing
'use strict';

myApp.controller('productCtrl', function ($scope, mainSrvc) {
  $scope.test = 'Please be workiing';
}); //closing
'use strict';

myApp.controller('productDetailCtrl', function ($scope, mainSrvc) {
  $scope.test = 'Please be workiing';
}); //closing
'use strict';

myApp.service('mainSrvc', function () {});
//# sourceMappingURL=bundle.js.map
