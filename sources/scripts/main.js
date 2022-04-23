"use strict";
var MyPortfolio;
(function (MyPortfolio) {
    /*--------------------------------------------------------------- */
    window.addEventListener("load", handleLoad);
    /*--------------------------------------------------------------- */
    let worksamples = [];
    /*--------------------------------------------------------------- */
    function handleLoad(_event) {
        console.log("Hello World, Anna here with my selfmade Website!");
        worksamples =
            [MyPortfolio.walkcycleRoxie, MyPortfolio.spaceAdventure, MyPortfolio.houdiniVellum, MyPortfolio.spaceShips, MyPortfolio.droids,
                MyPortfolio.progText, MyPortfolio.spaceInvaders, MyPortfolio.escapeTheEdge, MyPortfolio.websitePortfolio, MyPortfolio.seaworld,
                MyPortfolio.musikgigant, MyPortfolio.cypcyd];
        installListeners();
        showStartPage();
    }
    function handleNavClick(_event) {
        console.log("Clicked List Element in Head");
        let clicked = _event.currentTarget;
        console.log(clicked.id);
        if (clicked.id == "About_Me")
            showStartPage();
        else
            generateHTMLData(clicked.id);
    }
    function installListeners() {
        let navElements = document.getElementsByTagName("header")[0].getElementsByTagName("li");
        for (let navElement of navElements) {
            console.log("found navElement");
            navElement.addEventListener("click", handleNavClick);
        }
    }
    function showStartPage() {
        let node = document.getElementById("content");
        let content = "";
        content += "<h2 id='placeholderText'>Hi, Anna here. This is my Portfolio, it's currently under construction. More content comming soon.</h2><img title='me' id='myPhoto' src='sources/pictures/me.jfif'>";
        content += "<p><i> To do: Fill Content, design About-Me, difference youtube-Link <-> game-Link, make responsive for smartphone, footer css and content, Haftungsauschluss, Impressum</i></p>";
        node.innerHTML = content;
    }
    function generateHTMLData(categoryFilter) {
        let node = document.getElementById("content");
        let content = "";
        for (let worksample of worksamples) {
            if (worksample.category == categoryFilter) {
                content += "<div class='MediaBox " + worksample.category + "'>";
                content += "<div class='container'>";
                if (worksample.link) {
                    content += "<a href=' " + worksample.link + "' target='_blank'>";
                    if (worksample.picture)
                        content += "<img class='img' title = '" + worksample.title + "' src =' " + worksample.picture + "'>";
                    content += "<div class='overlay'><div class='text'> Click to view </div></div></a>";
                }
                else if (worksample.picture) {
                    content += "<img class='img' title = 'title' src =' " + worksample.picture + "'>";
                }
                content += "<div class='TextBox'>";
                content += "<h3>" + worksample.title + " </h3>";
                content += "<p>" + worksample.description + " </p>";
                content += "</div></div></div>";
            }
        }
        node.innerHTML = content;
    }
    // function generateHTMLData(): void {
    //     let node: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
    //     let content: string = "";
    //     for (let worksample of worksamples) {
    //         content += "<div class='MediaBox " + worksample.category + "'>";
    //         content += "<div class='container'>";
    //         if (worksample.link) {
    //             content += "<a href=' " + worksample.link + "' target='_blank'>";
    //             content += "<img class='img' title = '" + worksample.title + "' src =' " + worksample.picture + "'>";
    //             content += "<div class='overlay'><div class='text'> Click to watch on Youtube </div></div></a>";
    //         } else {
    //             content += "<img class='img' title = 'title' src =' " + worksample.picture + "'>";
    //         }
    //         content += "<div class='TextBox'>";
    //         content += "<h3>" + worksample.title + " </h3>";
    //         content += "<p>" + worksample.description + " </p>";
    //         content += "</div></div></div>";
    //     }
    //     node.innerHTML += content;
    // }
    // function filterContent(filterFor: string): void {
    //     //suche alle html-Mediaboxen, setzte auf hidden wenn id nicht filter for entspricht
    //     let mediaboxes: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("MediaBox");
    //     console.log(mediaboxes);
    //     for (let mediabox of mediaboxes) {
    //         if (mediabox.classList.contains(filterFor)) {
    //             console.log("Mediabox mit " + filterFor + " gefunden");
    //             mediabox.classList.add("visibility: visible");
    //         }
    //     }
    // }
})(MyPortfolio || (MyPortfolio = {}));
//# sourceMappingURL=main.js.map