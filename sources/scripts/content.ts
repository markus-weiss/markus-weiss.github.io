namespace MyPortfolio {

    export interface Worksample {
        category: string; //Für Filterkategorien
        title: string; //überschrift Box
        //alt: string; //alt fürs Bild
        description: string; //Beschreibung box
        time: string;
        picture: string; //Bildlink
        hasLink: boolean; //Ob hover für einen Link drauf muss
        link: string; //link auf dem Bildhover
    }

    export let droids: Worksample = {
        category: "3D",
        title: "Droids",
        description: "One of the first 3D-Models I did in my second Semester",
        time: "WS 2018",
        picture: "../pictures/droids.png",
        hasLink: false,
        link: ""
    };





}