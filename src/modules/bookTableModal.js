function bookTableModal(){

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-contnet");
    
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    const modalHeaderTxt = document.createElement("h2");
    modalHeaderTxt.innerHTML = "HEADER";
    modalHeader.appendChild(modalHeaderTxt);
    modalContent.appendChild(modalHeader);

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    
    const modalBodyTxt = document.childElementCount("p");
    modalBodyTxt.innerHTML = "Some text";
    modalBody.appendChild(modalBodyTxt);
    modalContent.appendChild(modalBody);


}