import MenuItem from "./menuItemClass";
import navBar from "./navBar";
import pageCreator from "./pageViewCreator";

function tabs() {

    const menuPage = document.getElementById("menu-page");

    const tabsContainer = document.createElement("div");

    const title = document.createElement("h2");
    title.innerHTML = "OUR MENU";

    const tabs = ['STARTERS', 'PIZZA', 'PASTA', 'DESERT', 'ALCOHOL'];
    


    tabsContainer.appendChild(title);
    menuPage.appendChild(tabsContainer);
}


function menu(id) {

    const menuPage = document.getElementById("menu-page");

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const col = 3;
    const row = 5;
    menuContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    menuContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;

    for (let i = 0; i < col; i++){
        for (let j = 0; j < row; j++){
            
            const menuItemObj = new MenuItem(`${id}`,"Lore ipsum, dolor sit amet, consectetur adipiscing elit ","12 $");
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
    tabs();
    menu("Pizza");
}

export default menuPageLoader;