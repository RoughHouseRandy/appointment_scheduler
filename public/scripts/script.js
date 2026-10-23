document.getElementById("appointment").onsubmit = () => {

    //Variable use to test for form validity
    let validated = true;

    //Call the clear errors function
    clearErrors();

    // Get the fname field, trim and store to a variable
    let fname = document.getElementById("fname").value.trim();
    // Get the lname field, trim and store to a variable
    let lname = document.getElementById("lname").value.trim();
    // Get the meeting-date field, trim and store to a variable
    let date = document.getElementById("meeting-date").value;
    // Get the meeting-time field, trim and store to a variable
    let time = document.getElementById("meeting-time");

    // If the fname field is empty, throw an error message and halt validation.
    if (fname === "") {
        validated = false;
        document.getElementById("error-msg-fname").style.display = "block";
    }
    
    //If the lname field is empty, throw an error message and halt validation.
    if (lname === "") {
        validated = false;
        document.getElementById("error-msg-lname").style.display = "block";
    }

    //If the date field is empty, throw an error message and halt validation.
    if (date === "") {
        validated = false;
        document.getElementById("error-msg-date").style.display = "block";
    }

    // If the time field is empty, throw an error message and halt validation.
    if (time === null) {
        validated = false;
        document.getElementById("error-msg-time").style.display = "block";
    }

    console.log(`Time value after: ${time}`)
    console.log(typeof(time))

    return validated;

};

// Function to clear out all the error message spans
function clearErrors() {
    let errors = document.getElementsByClassName("error-msg");

    for (i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
};