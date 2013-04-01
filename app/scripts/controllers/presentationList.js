'use strict';

angular.module('PresentarApp')
  .controller('PresentationListCtrl', function ($scope, presentationService) {
	$scope.presentations = presentationService.getPresentations();
  });
