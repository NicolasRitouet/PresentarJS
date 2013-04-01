'use strict';

angular.module('PresentarApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/presentations', {
        templateUrl: 'views/presentationList.html',
        controller: 'PresentationListCtrl'
      })
      .when('/presentation/:presentationId', {
        templateUrl: 'views/presentationDetail.html',
        controller: 'PresentationDetailCtrl'
      })
      .when('/presentation/:presentationId/slides', {
        templateUrl: 'views/slideList.html',
        controller: 'SlideListCtrl'
      })
      .when('/presentation/:presentationId/slide/:slideId', {
        templateUrl: 'views/slideDetail.html',
        controller: 'SlideDetailCtrl'
      })
      .otherwise({
        redirectTo: '/presentations'
      });
  });
