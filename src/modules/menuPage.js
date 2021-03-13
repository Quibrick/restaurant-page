import MenuItem from "./menuItemClass";
import navBar from "./navBar";
import pageCreator from "./pageViewCreator";

function title() {


}


function menu() {

    const menuPage = document.getElementById("menu-page");

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const col = 3;
    const row = 7;
    menuContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    menuContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;

    for (let i = 0; i < col; i++){
        for (let j = 0; j < row; j++){
            
            const menuItemObj = new MenuItem("Pizza","Special pizza with mushroms","12 $");
            const menuItemContainer = document.createElement("div");
            
            const title = document.createElement("h2");
            title.innerHTML = menuItemObj.title;
            
            const description = document.createElement("p");
            description.innerHTML = menuItemObj.description;
            
            const price = document.createElement("h3");
            price.innerHTML = menuItemObj.price;

            menuItemContainer.appendChild(title);
            menuItemContainer.appendChild(description);
            menuItemContainer.appendChild(price);

            menuContainer.appendChild(menuItemContainer);

        }
    }




    menuPage.appendChild(menuContainer);

    

}

function menuPageLoader(){
    pageCreator("menu-page");
    navBar("menu-page");
    menu();
}

export default menuPageLoader;