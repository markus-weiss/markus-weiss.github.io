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
        link: "https://www.youtube.com/watch?v=BadjKZukxEY"
    };


    export let droidsOhneLink: Worksample = {
        category: "3D",
        title: "Droids",
        description: "One of the first 3D-Models I did in my second Semester",
        time: "WS 2018",
        picture: "sources/pictures/droids.png",
        link: ""
    };


    export let ex1: Worksample = {
        category: "Prog",
        title: "example1",
        description: "Bla",
        time: "Sometime",
        picture: "sources/pictures/droids.png",
        link: ""
    };

    export let ex2: Worksample = {
        category: "Prog",
        title: "example2",
        description: "Blablhasfjsuiahf",
        time: "Sometime",
        picture: "sources/pictures/droids.png",
        link: ""
    };



}