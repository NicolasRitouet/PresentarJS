'use strict';

angular.module('PresentarApp')
  .controller('PresentationDetailCtrl', function ($scope, $routeParams, presentationService) {
  	var slide1 = {"id": 1, "title": "First slide", "content": "Contenu !", "next": slide2};
  	var slide2 = {"id": 2, "title": "Second slide", "content": "Contenu  numero deux", "next": slide3};
  	var slide3 = {"id": 3, "title": "Third slide", "content": "et de trois !", "next": slide4};
  	var slide4 = {"id": 4, "title": "Fourth slide", "content": "Enfin le quatre !", "next": undefined};
  	var presentation = { "id": 1, "title": "Devoxx France 2013 Review", "slides": [ slide1, slide2, slide3, slide4 ] };
    $scope.presentation = presentationService.getPresentation($routeParams.presentationId);
  });
