import {socialMediaArray} from './socialMediaArray';

// landing page constructor
function pageCreator(id){

    const content = document.getElementById("content");
    const homePage = document.createElement("div");
    homePage.id = id;
    content.appendChild(homePage);
}

// nav bar at landing page
function navBar(){

    const homePage = document.getElementById("home-page");
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

    homePage.appendChild(navBar);
}

// restaurant title and logo at the middle of the page
function restaurantLogo(){
    
    const homePage = document.getElementById("home-page");

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
    homePage.appendChild(titleContainer);
}

//book table btn functionality
function bookTableBtn(){
    
    const homePage = document.getElementById("home-page");
    const bookTable = document.createElement("BUTTON");
    bookTable.id = "book-table-btn";
    bookTable.innerHTML = "BOOK TABLE"
    homePage.appendChild(bookTable);
}

function socialMedia(){
    
    const homePage = document.getElementById("home-page");
    
    const socialTab = document.createElement("div");
    socialTab.id = "social-media";

    let socialMedia = socialMediaArray("facebook", "twitter", "instagram");
    let socialMediaLength = socialMedia.length;


    for (let i = 0; i < socialMediaLength; i++){

        const anchor = document.createElement("a");
        anchor.id = socialMedia[i].id;
        anchor.href = socialMedia[i].link;
        socialTab.append(anchor);
    }

    homePage.appendChild(socialTab);
}

//call on pageLoad and on home click
function homePageLoader(){

    pageCreator('home-page');
    navBar();
    restaurantLogo();
    bookTableBtn();
    socialMedia();
}

export {homePageLoader};