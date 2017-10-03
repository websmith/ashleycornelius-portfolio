'use strict';

angular.module('ashleycorneliusPortfolioApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project/:itemId',
        templateUrl: 'app/controllers/project/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      });
  });
