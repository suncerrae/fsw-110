// make the box disapear when the user clicks it

var box = document.getElementsByClassName("red-box")[0]

box.addEventListener("click",() =>  {
    box.style.background = "white"
})