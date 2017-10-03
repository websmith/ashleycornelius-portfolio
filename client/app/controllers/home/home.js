'use strict';

angular.module('ashleycorneliusPortfolioApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/controllers/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  });
