'use strict';

angular.module('ashleycorneliusPortfolioApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/controllers/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
