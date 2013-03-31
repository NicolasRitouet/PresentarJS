'use strict';

angular.module('PresentarApp')
  .controller('MainCtrl', function ($scope) {
  	var slide1 = {"title": "First slide", "content": "Contenu !", "next": slide2};
  	var slide2 = {"title": "Second slide", "content": "Contenu  numero deux", "next": slide3};
  	var slide3 = {"title": "Third slide", "content": "et de trois !", "next": slide4};
  	var slide4 = {"title": "Fourth slide", "content": "Enfin le quatre !", "next": undefined};
  	var presentation = { "title": "Devoxx France 2013 Review", "slides": [ slide1, slide2, slide3, slide4 ] };
  	var presentation1 = { "title": "Sample presentation", "slides": [ slide1, slide2, slide3, slide4 ] };
    $scope.presentations = [ presentation, presentation1 ];
  });
