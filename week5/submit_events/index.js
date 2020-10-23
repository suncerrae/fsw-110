document.body.style.textAlign = "center";
document.body.style.backgroundColor = "red";

var form = document.getElementById("formInfo");
var submitIt = document.getElementById("submit");

function newAlert() {

    var fullName = form.elements["fullName"].value;
    var email = form.elements["email"].value;
    var phone = form.elements["phone"].value;

    alert ("Full Name: " + fullName + "\nEmail: " + email + "\nPhone Number: " + phone);

    form.reset();
};

submitIt.addEventListener("click", newAlert);
