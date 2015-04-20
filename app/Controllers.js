angular.module("tasklist", [])
    .controller("taskController", function($scope) {
        $scope.tasks = {};
        $scope.name = "lilo";
    });