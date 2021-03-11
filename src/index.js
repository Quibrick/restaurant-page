import {homePageLoader} from './modules/homePage';
import {clearWindow} from './modules/clearWindow';
import {aboutPageLoader} from './modules/aboutPage';

window.onload = homePageLoader();

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () =>{

    clearWindow();
    aboutPageLoader();
});

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () =>{

    clearWindow();
    homePageLoader();
})
