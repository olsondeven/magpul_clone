var myApp = angular.module('myApp',['ui.router','ui.bootstrap']);

myApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './templates/home.html',
    controller: 'homeCtrl'
  })
  .state('product',{
    url: '/product/:category/:subcategory',
    templateUrl: './templates/product.html',
    controller: 'productCtrl'
  })
  .state('productDetail',{
    url: '/product/:id',
    templateUrl: './templates/productDetails.html',
    controller: 'productDetailCtrl'
  })
  .state('cart',{
    url: '/cart',
    templateUrl: './templates/cart.html',
    controller: 'cartCtrl'
  })
  .state('login',{
    url: '/login',
    templateUrl: './templates/login.html',
    controller: 'loginCtrl'
  })
});//closing
