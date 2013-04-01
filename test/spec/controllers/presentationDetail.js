'use strict';

describe('Controller: PresentationDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('PresentarApp'));

  var PresentationDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    PresentationDetailCtrl = $controller('PresentationDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
