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

    /*--------------------------------------------------------------- */

    export let walkcycleRoxie: Worksample = {
        category: "3D",
        title: "Rigging and Walkcycle",
        description: "Body-Rig from scratch. Made with 3dsMax. Triple-IK Leg Setup, IK-FK-Blend in Arms, Twistbones in Underarm. Simple Skinning. Keyframe-Animation.",
        time: "WS 2021",
        picture: "sources/pictures/Roxie_Rig45.png",
        link: ""
    };

    export let spaceAdventure: Worksample = {
        category: "3D",
        title: "Space Adventure",
        description: "Short 3D Movie made in Blender. My Tasks: Some Planets, Camera",
        time: "SS 2018",
        picture: "sources/pictures/spaceAdventure.png",
        link: "https://www.youtube.com/watch?v=BadjKZukxEY"
    };

    export let houdiniVellum: Worksample = {
        category: "3D",
        title: "Cloth-Animation with Houdini Vellum",
        description: "Trying out cloth-animation and analysing its steps in Houdini with Houdini Vellum for a university-Project.",
        time: "WS 2019",
        picture: "sources/pictures/HoudiniVellum.png",
        link: "https://youtu.be/bfQAIsTYnAU"
    };

    export let spaceShips: Worksample = {
        category: "3D",
        title: "Tie-Fighter and A-Wing",
        description: "Simple Models made in Blender",
        time: "SS 2018",
        picture: "sources/pictures/ships.png",
        link: ""
    };

    export let droids: Worksample = {
        category: "3D",
        title: "Droids",
        description: "One of the first 3D-Models I did in my second Semester. Made in Blender",
        time: "SS 2018",
        picture: "sources/pictures/droids.png",
        link: ""
    };

    /*--------------------------------------------------------------- */

    export let progText: Worksample = {
        category: "Prog",
        title: "Programming Skills and Tools",
        description: "Text to come. <p>C#, Unity, Typescript, UML, HTML5, CSS</p>",
        time: "",
        picture: "",
        link: ""
    };

    export let spaceInvaders: Worksample = {
        category: "Prog",
        title: "Space Invaders",
        description: "Made with html, css, and typescript in my second Semester.",
        time: "SS 2018",
        picture: "sources/pictures/spaceInvaders.png",
        link: "https://annalotz.github.io/EIA2/SpaceInvaders2/spaceInvaders.html"
    };

    export let escapeTheEdge: Worksample = {
        category: "Prog",
        title: "Escape The Edge",
        description: "Small game made with FUDGE (Furtwangen University Didactic Game Editor).",
        time: "WS 2019",
        picture: "sources/pictures/escapeTheEdge.png",
        link: "https://annalotz.github.io/PRIMA/EscapeTheEdge/Main.html"
    };

    export let websitePortfolio: Worksample = {
        category: "Prog",
        title: "This Website",
        description: "This Website is completely handmade by me with html, css and typescript. Hosting over Github-Pages.",
        time: "",
        picture: "",
        link: ""
    };

    export let seaworld: Worksample = {
        category: "Prog",
        title: "Seaworld Canvas",
        description: "Canvas animation with html and typescript",
        time: "SS 2018",
        picture: "sources/pictures/seaworld.png",
        link: "https://annalotz.github.io/EIA2/Aufgabe_11/Seaworld/Canvas.html"
    };

    /*--------------------------------------------------------------- */

    export let musikgigant: Worksample = {
        category: "Movies",
        title: "Der Musikgigant - Eine Orgel für China",
        description: "Team-Production in my second semester.",
        time: "SS 2018",
        picture: "sources/pictures/musikgigant.jpg",
        link: "https://youtu.be/5eLRdUD5BLw"
    };

    export let cypcyd: Worksample = {
        category: "Movies",
        title: "Change your partner - change your day",
        description: "Short Movie for the Modul 'Idea-Development' in my fourth semester.",
        time: "SS 2019",
        picture: "sources/pictures/cypcyd.png",
        link: "https://youtu.be/5eLRdUD5BLw"
    };
}