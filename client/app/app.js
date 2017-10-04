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
