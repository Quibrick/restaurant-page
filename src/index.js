import {pageLoader} from './modules/landingPage'
import {clearWindow} from './modules/clearWindow';

window.onload = pageLoader();

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () =>{

    clearWindow();
})
