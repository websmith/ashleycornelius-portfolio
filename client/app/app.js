'use strict';

var app = angular.module('ashleycorneliusPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
]);

var appEnvironment = 'development';

if (appEnvironment === 'production') {
    app.constant('DATA_ENDPOINT', 'https://acorncdn.nyc3.digitaloceanspaces.com/assets/data/portfolio.json');
} else if (appEnvironment === 'development') {
    app.constant('DATA_ENDPOINT', '/assets/data/portfolio.json');
} else {
    alert('could not determine app environment');
}

app.config(function ($urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
