describeUi("index", "/${artifactId}/index.html", function () {
    it("should show hello world", function () {
        runs(function () {
            var greeting = document.getElementById("greeting").innerHTML;
            expect(greeting).toEqual("Hello World!");
        });
    });
});
