'use strict';

angular.module('ashleycorneliusPortfolioApp').controller('ProjectCtrl', ['DATA_ENDPOINT', '$scope', '$http','$stateParams', function(DATA_ENDPOINT, $scope, $http, $stateParams) {
    $http.get(DATA_ENDPOINT).success(function(data) {
        $scope.projects = data;
        $scope.whichItem = $stateParams.itemId;

        if ($stateParams.itemId > 0) {
            $scope.prevItem = Number($stateParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.projects.length-1;
        }

        if ($stateParams.itemId < $scope.projects.length-1) {
            $scope.nextItem = Number($stateParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);
