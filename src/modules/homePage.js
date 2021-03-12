import socialMediaArray from './socialMediaArray';
import pageCreator from './pageViewCreator';
import navBar from './navBar';

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

    pageCreator("home-page");
    navBar("home-page");
    restaurantLogo();
    bookTableBtn();
    socialMedia();
}

export default homePageLoader;