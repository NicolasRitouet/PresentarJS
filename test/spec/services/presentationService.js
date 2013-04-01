'use strict';

describe('Service: presentationService', function () {

  // load the service's module
  beforeEach(module('PresentarApp'));

  // instantiate service
  var presentationService;
  beforeEach(inject(function (_presentationService_) {
    presentationService = _presentationService_;
  }));

  it('should do something', function () {
    expect(!!presentationService).toBe(true);
  });

});
