
/* Your task is to display to the user the key and key code they press.
Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */

var output = document.getElementById("output");

document.addEventListener("keydown", function(event){
        var keycode= event.keyCode;
        var key = event.key;
        output.style.fontSize = "25px"
        output.textContent = "You've pressed the " + key + " key. It's key code is " + keycode;
});