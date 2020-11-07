const form = document.getElementById("todoform");
const task = document.getElementById("task");
const description = document.getElementById("description");


form.addEventListener("submit", (e) => {

    e.preventDefault()

    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0];
    ul.append(li);
    li.classList = "list";

    const h3 = document.createElement("h3");
    h3.textContent = task.value;
    h3.style.marginBottom = "7px";
    li.appendChild(h3);

    const h5 = document.createElement("h5");
    h5.textContent = "- " + description.value;
    h5.style.marginBottom = "10px";
    li.appendChild(h5);
   
    const button = document.createElement("button");
    button.setAttribute("id", "delete")
    button.textContent = "Delete";
    button.style.marginBottom = "10px";
    button.style.padding = "3px";
    li.appendChild(button);

    button.addEventListener("click", function(e){
    h3.parentNode.removeChild(h3);
    h5.parentNode.removeChild(h5);
    button.parentNode.removeChild(button);
    });

    form.reset();
    
})