const fruits = ["Mango", "Banana", "Guava", "Strawberry", "Lemon", "Blackberry", "Peach"];

for (let i = 0; i < fruits.length; i++) {
   const header = document.createElement("h1")
   header.textContent = fruits[i]
   header.style.fontSize = "20px"
   header.style.fontWeight = "lighter"
   header.style.fontFamily = "sans-serif"
   header.style.color = "cornflowerblue"
   header.classList.add("border")
   document.body.append(header)
};





