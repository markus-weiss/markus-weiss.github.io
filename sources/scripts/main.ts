namespace MyPortfolio {

    /*--------------------------------------------------------------- */
    window.addEventListener("load", handleLoad);

    /*--------------------------------------------------------------- */
    let worksamples: Worksample[] = [];


    /*--------------------------------------------------------------- */
    function handleLoad(_event: Event): void {
        console.log("Hello World, Anna here with my selfmade Website!");
        worksamples =
            [walkcycleRoxie, spaceAdventure, houdiniVellum, spaceShips, droids,
                progText, spaceInvaders, escapeTheEdge, websitePortfolio, seaworld,
                musikgigant, cypcyd];
        installListeners();
        showStartPage();
    }


    function handleNavClick(_event: MouseEvent): void {
        console.log("Clicked List Element in Head");
        let clicked: HTMLLIElement = <HTMLLIElement>_event.currentTarget;
        console.log(clicked.id);
        if (clicked.id == "About_Me")
            showStartPage();
        else
            generateHTMLData(clicked.id);
    }


    function installListeners(): void {
        let navElements: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("header")[0].getElementsByTagName("li");

        for (let navElement of navElements) {
            console.log("found navElement");
            navElement.addEventListener("click", handleNavClick);
        }
    }


    // sadf Main Page text
    function showStartPage(): void {
        let node: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
        let content: string = "";

        content += "<h2 id='placeholderText'>Hi I'm Markus. This is my Portfolio, it's currently under construction. More content comming soon.</h2><img title='me' id='myPhoto' src='sources/pictures/me.png'>";

        content += "<p><i> To do: Fill Content, design About-Me, difference youtube-Link <-> game-Link, make responsive for smartphone, footer css and content, Haftungsauschluss, Impressum</i></p>";

        node.innerHTML = content;
    }


    function generateHTMLData(categoryFilter: string): void {
        let node: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
        let content: string = "";

        for (let worksample of worksamples) {
            if (worksample.category == categoryFilter) {
                content += "<div class='MediaBox " + worksample.category + "'>";
                content += "<div class='container'>";

                if (worksample.link) {
                    content += "<a href=' " + worksample.link + "' target='_blank'>";
                    if (worksample.picture)
                        content += "<img class='img' title = '" + worksample.title + "' src =' " + worksample.picture + "'>";
                    content += "<div class='overlay'><div class='text'> Click to view </div></div></a>";
                } else if (worksample.picture) {
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

}