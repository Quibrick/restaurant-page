// landing page constructor
function landingPage(){

    const content = document.getElementById("content");
    const landingPage = document.createElement("div");
    landingPage.id = "landing-page";
    content.appendChild(landingPage);

}

// nav bar at landing page
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

// restaurant title at the middle of the page
function title(){
    
    const landingPage = document.getElementById("landing-page");

    const titleContainer = document.createElement("div");
    titleContainer.id = "title-container";

    const restaurant = document.createElement("h2");
    restaurant.id = "header";
    restaurant.innerHTML = 'Restaurant';

    const name = document.createElement("h3");
    name.id = ("restaurant-name");
    name.innerHTML = "THE LATERN BISTRO";
    
    const hr = document.createElement("hr");
    hr.id = "restaurant-underline";
    name.appendChild(hr);

    restaurant.appendChild(name);
    titleContainer.appendChild(restaurant);
    landingPage.appendChild(titleContainer);
}

//book table btn functionality
function bookTableBtn(){
    const landingPage = document.getElementById("landing-page");
    const bookTable = document.createElement("BUTTON");
    bookTable.id = "book-table-btn";
    bookTable.innerHTML = "BOOK TABLE"
    landingPage.appendChild(bookTable);
}

function socialMedia(){
    const landingPage = document.getElementById("landing-page");

}

//call on pageLoad and on home click
function pageLoader(){

    landingPage();
    navBar();
    title();
    bookTableBtn();
}

export {pageLoader};