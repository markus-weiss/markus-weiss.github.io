"use strict";
var MyPortfolio;
(function (MyPortfolio) {
    /*--------------------------------------------------------------- */
    window.addEventListener("load", getContent);
    window.addEventListener("load", handleLoad);
    /*--------------------------------------------------------------- */
    let worksamples = [];
    /*--------------------------------------------------------------- */
    function handleLoad(_event) {
        console.log("Hello World, Anna here");
    }
    function getContent() {
        worksamples = [MyPortfolio.droids];
    }
})(MyPortfolio || (MyPortfolio = {}));
//# sourceMappingURL=main.js.map