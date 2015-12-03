var angular = require('angular');

angular.module('agenda', [])
    .controller('mainCtrl', ['$scope', function($scope) {
        $scope.a = 5;
    }]);