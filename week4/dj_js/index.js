let button = document.getElementById("button");
let back = document.getElementById("bkgnd");

function hoverHandle() {
    button.style.background = "blue"
}

function mouseDownHandle() {
    button.style.background = "red"
}

function mouseUpHandle() {
    button.style.background = "yellow"
}

function doubleHandle() {
    button.style.background = "green"
}

function scrollHandle() {
    button.style.background = "orange"
}
// function keyHandle() {
//     if (event.which === 82) {
//       button.style.background = "red"
//     }
// else if(event.which ===66) {
//     button.style.background ="blue"
// }
// else if (event.which === 89) {
//     button.style.background = "yellow"
// }

// else if (event.which == 71) {
//     button.style.background = "green"
// }
// else if (event.which === 79) {
//     button.style.background = "orange"
// }
// }

button.addEventListener("mouseover", hoverHandle)

button.addEventListener("mousedown", mouseDownHandle)

button.addEventListener("mouseup", mouseUpHandle)

button.addEventListener("dblclick", doubleHandle)

document.addEventListener("wheel", scrollHandle)

document.addEventListener("keydown", keyHandle)