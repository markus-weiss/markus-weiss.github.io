namespace MyPortfolio {

    export interface Worksample {
        category: string; //Für Filterkategorien
        title: string; //überschrift Box
        //alt: string; //alt fürs Bild
        description: string; //Beschreibung box
        time: string;
        picture: string; //Bildlink
        link: string; //link auf dem Bildhover
    }

    export let droids: Worksample = {
        category: "3D",
        title: "Droids",
        description: "One of the first 3D-Models I did in my second Semester",
        time: "WS 2018",
        picture: "sources/pictures/droids.png",
        link: ""
    };


    export let spaceAdventure: Worksample = {
        category: "3D",
        title: "Space Adventure",
        description: "Short 3D Movie. My Tasks: Some Planets, Camera",
        time: "WS 2018",
        picture: "sources/pictures/spaceAdventure.png",
        link: "https://www.youtube.com/watch?v=BadjKZukxEY"
    };


    export let spaceInvaders: Worksample = {
        category: "Prog",
        title: "Space Invaders",
        description: "Made with html, css, and typescript in my second Semester.",
        time: "WS 2018",
        picture: "sources/pictures/spaceInvaders.png",
        link: "https://annalotz.github.io/EIA2/SpaceInvaders2/spaceInvaders.html"
    };

    export let seaworld: Worksample = {
        category: "Prog",
        title: "Seaworld Canvas",
        description: "Canvas animation with html and typescript",
        time: "WS 2018",
        picture: "sources/pictures/seaworld.png",
        link: "https://annalotz.github.io/EIA2/Aufgabe_11/Seaworld/Canvas.html"
    };



}