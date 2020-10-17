document.body.style.backgroundColor = "blue";
document.body.style.textAlign = "center";

let header = document.createElement("h1");
header.textContent = "My JavaScript Calculator";
header.style.fontSize = "40px";
header.style.padding = "50px";
header.style.color = "whitesmoke ";
document.body.appendChild(header);

// Add

let div = document.createElement("div");
div.setAttribute("id", "sec");
document.body.appendChild(div);

let firstBox = document.createElement("input");
firstBox.setAttribute("type", "text");
firstBox.setAttribute("id", "answer1");
firstBox.style.background = "yellow";
firstBox.style.border = "2px dotted black";
firstBox.style.padding = "5px";
firstBox.style.fontSize = "18px";
firstBox.style.marginBottom = "30px";
document.getElementById("sec").appendChild(firstBox);

let add = document.createElement("span");
add.textContent = "+";
add.style.fontSize = "25px";
add.style.padding = "10px";
add.style.color = "whitesmoke";
document.getElementById("sec").appendChild(add);

let secondBox = document.createElement("input");
secondBox.setAttribute("type", "text");
secondBox.setAttribute("id", "answer2");
secondBox.style.background = "yellow";
secondBox.style.border = "2px dotted black";
secondBox.style.padding = "5px";
secondBox.style.fontSize = "18px";
secondBox.style.marginBottom = "30px";
document.getElementById("sec").appendChild(secondBox);

let equal = document.createElement("button");
equal.textContent = "=";
equal.style.fontSize = "20px";
equal.style.border = "3px solid black";
equal.style.marginLeft = "15px";
equal.style.marginRight = "20px";
document.getElementById("sec").appendChild(equal);

equal.addEventListener("click", function() {

let num1 = document.getElementById("answer1").value;
let num2 = document.getElementById("answer2").value;
let eql = Number(num1) + Number(num2);
let response = document.createElement("span");
response.textContent = eql;
response.style.fontSize = "24px";
document.getElementById("sec").appendChild(response);
});


// Subtract

let div1 = document.createElement("div");
div1.setAttribute("id", "sec1");
document.body.appendChild(div1);

let thirdBox = document.createElement("input");
thirdBox.setAttribute("type", "text");
thirdBox.setAttribute("id", "answer3");
thirdBox.style.background = "yellow";
thirdBox.style.border = "2px dotted black";
thirdBox.style.padding = "5px";
thirdBox.style.fontSize = "18px";
thirdBox.style.marginBottom = "30px";
document.getElementById("sec1").appendChild(thirdBox);

let sub = document.createElement("span");
sub.textContent = "-";
sub.style.fontSize = "37px";
sub.style.padding = "10px";
sub.style.color = "whitesmoke";
document.getElementById("sec1").appendChild(sub);

let forthBox = document.createElement("input");
forthBox.setAttribute("type", "text");
forthBox.setAttribute("id", "answer4");
forthBox.style.background = "yellow";
forthBox.style.border = "2px dotted black";
forthBox.style.padding = "5px";
forthBox.style.fontSize = "18px";
forthBox.style.marginBottom = "30px";
document.getElementById("sec1").appendChild(forthBox);

let equals2 = document.createElement("button");
equals2.textContent = "=";
equals2.style.fontSize = "20px";
equals2.style.border = "3px solid black";
equals2.style.marginLeft = "15px";
equals2.style.marginRight = "20px";
document.getElementById("sec1").appendChild(equals2);

equals2.addEventListener("click", function() {

let num3 = document.getElementById("answer3").value;
let num4 = document.getElementById("answer4").value;
let eql2 = Number(num3) - Number(num4);
let response2 = document.createElement("span");
response2.textContent = eql2;
response2.style.fontSize = "25px";
document.getElementById("sec1").appendChild(response2);

});


// Multiply

let div2 = document.createElement("div");
div2.setAttribute("id", "sec3");
document.body.appendChild(div2);

let fifthBox = document.createElement("input");
fifthBox.setAttribute("type", "text");
fifthBox.setAttribute("id", "answer5");
fifthBox.style.background = "yellow";
fifthBox.style.border = "2px dotted black";
fifthBox.style.padding = "5px";
fifthBox.style.fontSize = "18px";
fifthBox.style.marginBottom = "30px";
document.getElementById("sec3").appendChild(fifthBox);

let multi = document.createElement("span");
multi.textContent = "x";
multi.style.fontSize = "25px";
multi.style.padding = "10px";
multi.style.color = "whitesmoke";
document.getElementById("sec3").appendChild(multi);

let sixthBox = document.createElement("input");
sixthBox.setAttribute("type", "text");
sixthBox.setAttribute("id", "answer6");
sixthBox.style.background = "yellow";
sixthBox.style.border = "2x dotted black";
sixthBox.style.padding = "5px";
sixthBox.style.fontSize = "18px";
sixthBox.style.marginBottom = "30px";
document.getElementById("sec3").appendChild(sixthBox);

let equals3 = document.createElement("button");
equals3.textContent = "=";
equals3.style.fontSize = "20px";
equals3.style.border = "3px solid black";
equals3.style.marginLeft = "15px";
equals3.style.marginRight = "20px";
document.getElementById("sec3").appendChild(equals3);

equals3.addEventListener("click", function() {

let num5 = document.getElementById("answer5").value;
let num6 = document.getElementById("answer6").value;
let eql3 = Number(num5) * Number(num6);
let response3 = document.createElement("span");
response3.textContent = eql3;
response3.style.fontSize = "25px";
document.getElementById("sec3").appendChild(response3);
});