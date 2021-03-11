// page view constructor
function pageCreator(id){

    const content = document.getElementById("content");
    const homePage = document.createElement("div");
    homePage.id = id;
    content.appendChild(homePage);
}

export {pageCreator};