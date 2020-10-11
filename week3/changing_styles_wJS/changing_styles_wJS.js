var states = ["California", "New York", "Texas", "Florida", "North Carolina"];
var div = document.createElement("div")
document.body.append(div)

for (i = 0; i < states.length; i++) {var heading = document.createElement("h1")
div.append(heading)
heading.textContent = states[i]


heading.style.color = "cornflowerblue";
heading.style.fontFamily = "sans-serif";
heading.style.fontSize = "20px";
heading.style.fontWeight = "lighter";

//add new-class
heading.classList.add("border")


console.log(heading.className)

}





