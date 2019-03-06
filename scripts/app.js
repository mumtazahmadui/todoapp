angular.module('toDoApp', [])
    .controller('mainCtrl', function ($scope) {
        $scope.todo = [
            { "name": "clean the house" },
            { "name": "water the dog" },
            { "name": "feed the lawn" },
            { "name": "pay dem bills" },
            { "name": "run" },
            { "name": "swim" }
        ]
    });