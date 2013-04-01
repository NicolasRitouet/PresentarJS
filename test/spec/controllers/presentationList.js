'use strict';

describe('Controller: PresentationListCtrl', function () {

  // load the controller's module
  beforeEach(module('PresentarApp'));

  var PresentationListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    PresentationListCtrl = $controller('PresentationListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
