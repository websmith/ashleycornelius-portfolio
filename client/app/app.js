'use strict';

var app = angular.module('ashleycorneliusPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
]);

app.constant('DATA_ENDPOINT', '/assets/data/portfolio.json');

app.config(function ($urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
