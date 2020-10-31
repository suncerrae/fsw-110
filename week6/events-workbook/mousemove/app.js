  
var redbox = document.getElementsByClassName("red-box")[0]

redbox.addEventListener("mousemove", function(event){
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    redbox.innerHTML = coor;
})

function clearCoor() {
    redbox.innerHTML = "";
}