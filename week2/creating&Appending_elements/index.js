var header = document.createElement("h1")
header.textContent = "Welcome to my JS site"
document.body.append(header)

var para = document.createElement("p")
para.textContent = "All of this was created with Javascript"
document.body.append(para)

var orderList = document.createElement("ol")

var firstList = document.createElement("li")
firstList.textContent = "This is my first item"
orderList.appendChild(firstList)

var secondList = document.createElement("li")
secondList.textContent = "This is my second item"
orderList.appendChild(secondList)

var thirdList = document.createElement("li")
thirdList.textContent = "This is my third item"
orderList.appendChild(thirdList)

document.body.append(orderList)