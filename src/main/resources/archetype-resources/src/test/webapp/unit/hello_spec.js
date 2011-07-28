describe('greet', function() {

    it('should greet the world', function() {
        expect(greet("World")).toEqual("Hello World!");
    });

    it('should greet Stefan', function() {
        expect(greet("Stefan")).toEqual("Hello Stefan!");
    });

});
