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
}

export {navBar};