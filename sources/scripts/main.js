"use strict";
var MyPortfolio;
(function (MyPortfolio) {
    /*--------------------------------------------------------------- */
    window.addEventListener("load", getContentWorksamples);
    window.addEventListener("load", handleLoad);
    /*--------------------------------------------------------------- */
    let worksamples = [];
    /*--------------------------------------------------------------- */
    function handleLoad(_event) {
        if (worksamples)
            console.log("Hello World, Anna here with my selfmade Website!");
        generateHTMLData();
        installListeners();
    }
    function handleNavClick(_event) {
        console.log("Clicked List Element in Head");
        let clicked = _event.currentTarget;
        console.log(clicked.id);
    }
    function getContentWorksamples() {
        worksamples = [MyPortfolio.droids, MyPortfolio.droidsOhneLink];
    }
    function installListeners() {
        let navElements = document.getElementsByTagName("header")[0].getElementsByTagName("li");
        for (let navElement of navElements) {
            console.log("found navElement");
            navElement.addEventListener("click", handleNavClick);
        }
    }
    function generateHTMLData() {
        let node = document.getElementById("content");
        let content = "";
        for (let worksample of worksamples) {
            content += "<div class='MediaBox " + worksample.category + "'>";
            content += "<div class='container'>";
            if (worksample.link) {
                content += "<a href=' " + worksample.link + "' target='_blank'>";
                content += "<img class='img' title = '" + worksample.title + "' src =' " + worksample.picture + "'>";
                content += "<div class='overlay'><div class='text'> Click to watch on Youtube </div></div></a>";
            }
            else {
                content += "<img class='img' title = 'title' src =' " + worksample.picture + "'>";
            }
            content += "<div class='TextBox'>";
            content += "<h3>" + worksample.title + " </h3>";
            content += "<p>" + worksample.description + " </p>";
            content += "</div></div></div>";
        }
        node.innerHTML += content;
    }
})(MyPortfolio || (MyPortfolio = {}));
//# sourceMappingURL=main.js.map