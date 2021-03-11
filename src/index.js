import {homePageLoader} from './modules/homePage'
import {clearWindow} from './modules/clearWindow';

window.onload = homePageLoader();

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () =>{

    clearWindow();
})
