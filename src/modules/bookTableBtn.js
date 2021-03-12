import bookingsPageLoader from "./bookingsPage";
import clearWindow from "./clearWindow";

//book table btn functionality
function bookTableBtn(id){
    
    const view = document.getElementById(id);
    const bookTable = document.createElement("button");
    bookTable.addEventListener("click", ()=>{

        clearWindow();
        bookingsPageLoader();
    })
    bookTable.id = "book-table-btn";
    bookTable.innerHTML = "BOOK TABLE"
    view.appendChild(bookTable);
}

export default bookTableBtn;