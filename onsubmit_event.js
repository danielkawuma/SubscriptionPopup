
// Below Function Executes On Form Submit
function ValidationEvent() {
// Storing Field Values In Variables
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

// Regular Expression For Email
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
// Conditions
if (name != '' && email != '') {
if (email.match(emailReg)) {
alert("All type of validation has been done on OnSubmit event.");
return true;
} 
 else {
alert("Invalid Email Address...!!!");
return false;
}
} else {
alert("All fields are required.....!");
return false;
}
}

