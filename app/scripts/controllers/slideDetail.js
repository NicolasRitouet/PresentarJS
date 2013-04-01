'use strict';

angular.module('PresentarApp')
  .controller('SlideDetailCtrl', function ($scope, $routeParams, presentationService) {
    $scope.slide = presentationService.getSlide($routeParams.presentationId, $routeParams.slideId);
    $scope.presentation = presentationService.getPresentation($routeParams.presentationId);
  });
