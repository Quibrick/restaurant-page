import pageCreator from './pageViewCreator';
import navBar from './navBar';

function aboutUs(){

    const aboutPage = document.getElementById("about-page");

    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-us-container";

    const aboutUs = document.createElement("h2");
    aboutUs.id = "about-us";
    aboutUs.innerHTML = "ABOUT US";

    const hr = document.createElement("hr");
    hr.id = "about-us-hr";
    aboutUs.appendChild(hr);

    const boldDescription = document.createElement("h3");
    boldDescription.id = "bold-description";
    boldDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

    const regDescription = document.createElement("p");
    regDescription.id = "regular-description";
    regDescription.innerHTML = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    boldDescription.appendChild(regDescription);

    aboutUs.appendChild(boldDescription);

    aboutContainer.appendChild(aboutUs);

    aboutPage.appendChild(aboutContainer);

    const photo = document.createElement("div");
    photo.id = "about-us-photo";

    aboutContainer.appendChild(photo)
    
}

function aboutPageLoader(){
    pageCreator('about-page')
    navBar('about-page');
    aboutUs();
}

export default aboutPageLoader;