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

app.controller('AppCtrl', function () {
    angular.element(document).ready(function () {
        $(document).on('click', '.sidebar .menu-icon', function () {
            if ($('.sidebar').hasClass('close')) {
                $('.sidebar .menu-icon').css('transform', 'rotate(180deg)');
                $('.sidebar').removeClass('close');
                $('.sidebar').addClass('open');
            } else {
                $('.sidebar .menu-icon').css('transform', 'rotate(0deg)');
                $('.sidebar').removeClass('open');
                $('.sidebar').addClass('close');
            }
        });
    });
});
