'use strict';

describe('Controller: ExperienceCtrl', function () {

  // load the controller's module
  beforeEach(module('ashleycorneliusPortfolioApp'));

  var ExperienceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperienceCtrl = $controller('ExperienceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
