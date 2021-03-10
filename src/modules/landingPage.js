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

    let navBarContent = [

        'HOME',

        'ABOUT',
        
        'BOOKINGS',

        'MENU',

        'CONTACT'
    ];

    for (let items of navBarContent){

        const navButton = document.createElement("BUTTON");
        navButton.classList.add("navigation-btn");
        navButton.id = `${items.toLowerCase()}-btn`;
        navButton.innerHTML = items;
        navBar.append(navButton);
    }

    landingPage.appendChild(navBar);
}

function title(){
    
    const landingPage = document.getElementById("landing-page");
    const titleContainer = document.createElement("div");
    titleContainer.id = 'title-container';
    const restaurant = document.createElement("h2");
    restaurant.innerHTML = 'Restaurant';
    const name = document.createElement("h3");
    name.innerHTML = 'RESTAURANT NAME';
    restaurant.appendChild(name);
    titleContainer.appendChild(restaurant);
    landingPage.appendChild(titleContainer);
}


function pageLoader(){

    landingPage();
    navBar();
    title();
}

export {pageLoader};