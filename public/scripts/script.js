document.getElementById("appointment").onsubmit = () => {

    //Variable use to test for form validity
    let validated = true;

    // Get the fname field, trim and store to a variable
    let fname = document.getElementById("fname").value.trim();
    // Get the lname field, trim and store to a variable
    let lname = document.getElementById("lname").value.trim();
    // Get the meeting-date field, trim and store to a variable
    let date = document.getElementById("meeting-date").value;
    // Get the meeting-time field, trim and store to a variable
    let time = document.getElementById("meeting-time");

    // If the fname field is empty, throw a message to the user
    if (fname === "") {
        validated = false;
        document.getElementById("error-msg-fname").style.display = "block";
    }


    return validated;

}