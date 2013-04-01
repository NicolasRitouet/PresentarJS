'use strict';

describe('Controller: SlideDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('PresentarApp'));

  var SlideDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SlideDetailCtrl = $controller('SlideDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
