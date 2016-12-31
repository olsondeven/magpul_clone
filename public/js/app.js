var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: './templates/home.html',
    controller: 'homeCtrl'
  })
  .state('product',{
    url: '/product',
    templateUrl: './templates/product.html',
    controller: 'productCtrl'
  })
  .state('productDetail',{
    url: '/productDetails',
    templateUrl: './templates/productDetails.html',
    controller: 'porductDetailCtrl'
  })
  .state('cart',{
    url: '/cart',
    templateUrl: './templates/cart.html',
    controller: 'cartCtrl'
  })
  .state('editCart',{
    url: '/edit-cart',
    templateUrl: '.templates/editCart.html',
    controller: 'editCartCtrl'
  })
});//closing
