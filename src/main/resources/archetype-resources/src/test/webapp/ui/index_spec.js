describe("index", function () {
    it("should show hello world", function () {
        loadHtml("/${artifactId}/index.html");
        runs(function () {
            var greeting = testwindow().document.getElementById("greeting").innerHTML;
            expect(greeting).toEqual("Hello World!");
        });
    });
});
