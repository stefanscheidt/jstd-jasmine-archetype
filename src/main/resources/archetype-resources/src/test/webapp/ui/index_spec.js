describe("index", function () {
    it("should show hello world", function () {
        loadHtml("index.html");
        runs(function () {
            var greeting = testframe().document.getElementById("greeting").innerHTML;
            expect(greeting).toEqual("Hello World!");
        });
    });
});
