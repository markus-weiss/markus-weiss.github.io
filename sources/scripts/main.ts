namespace MyPortfolio {

    /*--------------------------------------------------------------- */
    window.addEventListener("load", getContent);
    window.addEventListener("load", handleLoad);

    /*--------------------------------------------------------------- */
    let worksamples: Worksample[] = [];



    /*--------------------------------------------------------------- */
    function handleLoad(_event: Event): void {

        console.log("Hello World, Anna here");
    }

    function getContent(): void {
        worksamples = [droids];
    }


}