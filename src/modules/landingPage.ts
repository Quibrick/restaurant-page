function landingPage(){

    const content = document.getElementById("content");
    const landingPage = document.createElement("div");
    landingPage.id = "landing-page";
    content.appendChild(landingPage);

}

function navBar(){

    const landingPage = document.getElementById("landing-page");
    const navBar = document.createElement("nav");
    navBar.id = "navigation";

    let navBarContent : string[] = [

        'HOME',

        'ABOUT',
        
        'BOOKINGS',

        'MENU',

        'EVENTS',

        'CONTACT'
    ];

    for (let items of navBarContent){

        const navAnchor = document.createElement("a");
    
    }

    landingPage.appendChild(navBar);
}


function pageLoader(){
    landingPage();
    navBar();
}

export {pageLoader};