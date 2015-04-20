angular.module("taskList", [])
    .controller("TaskController", function($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";
    });