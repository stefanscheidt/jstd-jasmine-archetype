TestCase("greet_test", {
    test_greet_world: function () {
        assertEquals("Hello World!", greet("World"));
    },
    test_greet_Stefan: function () {
        assertEquals("Hello Stefan!", greet("Stefan"));
    }
})