'use strict';

describe('Controller: SlideListCtrl', function () {

  // load the controller's module
  beforeEach(module('PresentarApp'));

  var SlideListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SlideListCtrl = $controller('SlideListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
