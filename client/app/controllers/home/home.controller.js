'use strict';

angular.module('ashleycorneliusPortfolioApp').controller('HomeCtrl', ['DATA_ENDPOINT', '$scope', '$http', function(DATA_ENDPOINT, $scope, $http) {
    $http.get(DATA_ENDPOINT).success(function (data) {
        $scope.projects = data;
    });
}]);
