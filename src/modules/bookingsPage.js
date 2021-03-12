import navBar from "./navBar";
import pageCreator from "./pageViewCreator";
 
function bookingsPageForm() {

    const bookingsPage = document.getElementById("bookings-page");
    
    const form = document.createElement("form");
    form.id = "bookings-form";

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");

    const nameInput = document.createElement("input");
    nameInput.placeholder = "  Name";
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";

    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");

    const emailInput = document.createElement("input");
    emailInput.placeholder = "  Email";
    emailInput.type = "text";
    emailInput.id = "email";
    emailInput.name = "email";

    emailLabel.appendChild(emailInput);
    form.appendChild(emailLabel);

    const phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "phone");

    const phoneInput = document.createElement("input");
    phoneInput.placeholder = "  Phone";
    phoneInput.type = "text";
    phoneInput.id = "phone";
    phoneInput.name = "phone";

    phoneLabel.appendChild(phoneInput);
    form.appendChild(phoneLabel);

    const peopleLabel = document.createElement("label");
    peopleLabel.setAttribute("for", "people");

    const peopleInput = document.createElement("input");
    peopleInput.placeholder = "  People";
    peopleInput.type = "text";
    peopleInput.id = "people";
    peopleInput.name = "people";

    peopleLabel.appendChild(peopleInput);
    form.appendChild(peopleLabel);

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");

    const dateInput = document.createElement("input");
    dateInput.placeholder = "  Date (dd / mm)";
    dateInput.type = "text";
    dateInput.id = "date";
    dateInput.name = "date";

    dateLabel.appendChild(dateInput);
    form.appendChild(dateLabel);

    const timeLabel = document.createElement("label");
    timeLabel.setAttribute("for", "email");

    const timeInput = document.createElement("input");
    timeInput.placeholder = "  Time";
    timeInput.type = "text";
    timeInput.id = "time";
    timeInput.name = "time";

    timeLabel.appendChild(timeInput);
    form.appendChild(timeLabel);

    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-booking-btn";
    submitBtn.classList.add("book-btn");
    submitBtn.type = "submit";
    submitBtn.value = "BOOK NOW";

    form.appendChild(submitBtn);


    bookingsPage.appendChild(form);
}


function bookingsPageLoader() {

    pageCreator("bookings-page");
    navBar("bookings-page");
    bookingsPageForm();

}

export default bookingsPageLoader;