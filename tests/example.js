describe('add a new task to the list', function() {
    it('should be in the list', function() {
        element(by.model('tasklist')).sendKeys('new Task');

        var e = jQuery.Event("keydown", {
            keyCode: 13
        });

        expect(tasks[0]).toBe("new Task");
    });
});