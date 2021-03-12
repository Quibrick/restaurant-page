//book table btn functionality
function bookTableBtn(){
    
    const homePage = document.getElementById("home-page");
    const bookTable = document.createElement("button");
    bookTable.addEventListener("click", ()=>{
        
        console.log('working');
    })
    bookTable.id = "book-table-btn";
    bookTable.innerHTML = "BOOK TABLE"
    homePage.appendChild(bookTable);
}

export default bookTableBtn;