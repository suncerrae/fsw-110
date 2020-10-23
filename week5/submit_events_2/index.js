var form = document.getElementById("forms");
var submits = document.getElementById("submit");

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var genders = form.elements["gender"].value;
    var locations = form.elements["travel-location"].value;
    var diets = [];

    if (form.elements["vegetarian"].checked) {
        diets.push(document.getElementById("vegetarian").value);
    }
    if (form.elements["dairyFree"].checked) {
        diets.push(document.getElementById("dairyFree").value);
    }
    if (form.elements["glutenFree"].checked) {
        diets.push(document.getElementById("glutenFree").value);
    }

    alert ("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + genders + "\nTravel Location: " + locations + "\nDietary Restrictions: " + diets + "\nThank you for traveling with  Airlines!");

    form.reset();
    
};

submits.addEventListener("click", formAlert);