var angular = require('angular');

angular.module('agenda', [])
    .controller('mainctrl', ['$scope', function($scope) {
        $scope.a = 5;
    }]);