myApp.directive('carouselDirect',function(){
  return {
    restrict: 'EA',
    templateUrl: './js/directive/carousel.html',
    controller: function($scope){
      $scope.myInterval = 3000;
      $scope.slides = [{
                image:'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/PRS_GEN3_Carousel.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
                text: 'PRS GEN3 STOCK'
              },{
                image:'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/Hats.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
                text: 'MAGPUL HATS'
              },{
                image:'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/SL-SCarousel.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
                text: 'MOE SL-S CARBINE STOCK'
              },{
                image:'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/HunterTakedown.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
                text: 'HUNTER SERIES STOCKS AND ACCESSORIES'
              },{
                image:'https://www.magpul.com/Admin/Public/GetImage.ashx?Image=/Files/Files/Images/Homepage/Glock21.jpg&Format=jpg&Height=760&Crop=5&background=ffffff',
                text: 'PMAG 21 GL9'
              }];
    }
  };
});
