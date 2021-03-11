import {pageLoader} from './modules/homePage'
import {clearWindow} from './modules/clearWindow';

window.onload = pageLoader();

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () =>{

    clearWindow();
})
