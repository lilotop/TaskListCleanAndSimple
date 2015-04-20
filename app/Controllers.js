angular.module("tasklist", [])
    .controller("taskController", function($scope) {
        $scope.tasks = [];
        $scope.addTask = function() {
            if (event.keyCode == 13 && $scope.newTask) {
                $scope.tasks.push($scope.newTask);
                $scope.newTask = "";
            }
        }
        $scope.deleteTask = function()
        {

        }
    })