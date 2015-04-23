//describe('add a new task to the list', function() {
//    it('should be in the list', function() {
//        element(by.model('tasklist')).sendKeys('new Task');
//
//        var e = jQuery.Event("keydown", {
//            keyCode: 13
//        });
//
//        expect(tasks[0]).toBe("new Task");
//    });
//});

describe('taskListApp controllers', function() {

    describe('taskController', function() {
        var scope, ctrl;
        beforeEach(
			function(){
				module('tasklist', function () {});
				inject(function($rootScope, $controller) {
				

					scope = $rootScope.$new();
					ctrl = $controller('taskController', {$scope: scope})
				})
			}
		);

    describe('Managing Lists', function () {
        it('should not have a new List on start', function () {
            expect(scope.tasks.length).toBe(0);
        });

        //    it('should have default List on start', function () {
        //        expect(scope.lists.length).toBe(1);
        //    });
        //
        //    it('should not add empty Lists', function () {
        //        scope.newList = '';
        //        scope.addList();
        //        expect(scope.lists.length).toBe(1);
        //    });
        //
        //    it ('should add a new valid List', function () {
        //        scope.newList = 'Hogor\'s Tasks';
        //        scope.addList();
        //        expect(scope.lists.length).toBe(2);
        //    });
        //});
        //
        //describe('Managing Tasks', function() {
        //    it('should not have a new Task on start', function () {
        //        expect(scope.newTask).toBe('');
        //    });
        //
        //    it('should have default Tasks on start', function () {
        //        expect(scope.tasks.length).toBe(8);
        //    });
        //
        //    it('should not add empty Tasks', function () {
        //        scope.newTask = '';
        //        scope.addTask();
        //        expect(scope.tasks.length).toBe(8);
        //    });
        //
        //    it ('should add a new valid Task', function () {
        //        scope.newTask = 'Finish';
        //        scope.addTask();
        //        expect(scope.tasks.length).toBe(9);
        //    });
    });
    });
});