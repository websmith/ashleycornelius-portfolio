'use strict';

angular.module('ashleycorneliusPortfolioApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('experience', {
        url: '/experience',
        templateUrl: 'app/controllers/experience/experience.html',
        controller: 'ExperienceCtrl',
        controllerAs: 'experience'
      });
  });
