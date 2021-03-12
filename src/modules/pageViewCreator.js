// page view constructor so we can append elements to it
function pageCreator(id){

    const content = document.getElementById("content");
    const homePage = document.createElement("div");
    homePage.id = id;
    content.appendChild(homePage);
}

export default pageCreator;