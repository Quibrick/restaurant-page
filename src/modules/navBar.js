import clearWindow from './clearWindow';
import homePageLoader from './homePage';
import aboutPageLoader from './aboutPage';

function navBar(id){

    const homePage = document.getElementById(id);
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

    const aboutBtn = document.getElementById("about-btn");
    aboutBtn.addEventListener("click", () =>{

        clearWindow();
        aboutPageLoader();
    });

    const homeBtn = document.getElementById('home-btn');
    homeBtn.addEventListener('click', () =>{

        clearWindow();
        homePageLoader();
    });
}



export default navBar;