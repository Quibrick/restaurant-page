import clearWindow from './clearWindow';
import homePageLoader from './homePage';
import aboutPageLoader from './aboutPage';
import bookingsPageLoader from './bookingsPage';
import menuPageLoader from './menuPage';

//navigation bar logic and functionality, appends itself on the head of each view based on arg : id
function navBar(id) {

    const homePage = document.getElementById(id);
    const navBar = document.createElement("nav");
    navBar.id = "navigation";

    //easily add or remove content from nav bar
    let navBarContent = [

        'HOME',

        'ABOUT',
        
        'BOOKINGS',

        'MENU'
    ];

    //create nav-bar buttons with proper id tags
    for (let items of navBarContent) {

        const navButton = document.createElement("BUTTON");
        navButton.classList.add("navigation-btn");
        navButton.id = `${items.toLowerCase()}-btn`;
        navButton.innerHTML = items;
        navBar.append(navButton);
    }

    homePage.appendChild(navBar);

    //event listeners for each button
    const aboutBtn = document.getElementById("about-btn");
    aboutBtn.addEventListener("click", () => {

        clearWindow();
        aboutPageLoader();
    });

    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () => {

        clearWindow();
        homePageLoader();
    });

    const bookingsBtn = document.getElementById("bookings-btn");
    bookingsBtn.addEventListener("click", () => {
        
        clearWindow();
        bookingsPageLoader();
    })

    const menuBtn = document.getElementById("menu-btn");
    menuBtn.addEventListener("click", () => {

        clearWindow();
        menuPageLoader();
    })
}



export default navBar;