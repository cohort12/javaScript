const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const html = document.documentElement;

console.log(p.parentNode);
console.log(p.parentNode.parentNode);
console.log(html.parentNode);

console.log(ul.childNodes);

ul.firstElementChild.style.background="yellow";

for(let element of ul.children){
    element.style.background="gold";
}

document.body.children[3].lastElementChild.style.background="fuchsia";

const tiger = ul.children[1];
tiger.nextElementSibling.style.background="coral";

tiger.previousElementSibling.style.background="aquamarine";

// Assignment; Adding more types of sharks
const toDoList = document.querySelector("ul");
const newToDo = document.createElement("li");

newToDo.textContent = "Basking Shark";
toDoList.appendChild(newToDo);

anotherToDo = document.createElement("li");
anotherToDo.textContent = "Blacktip shark";
toDoList.insertBefore(anotherToDo, toDoList.firstElementChild);

anotherToDo = document.createElement("li");
anotherToDo.textContent = "Bull shark";
toDoList.insertBefore(anotherToDo, toDoList.lastElementChild);

anotherToDo = document.createElement("li");
anotherToDo.textContent = "Goblin shark";
toDoList.insertBefore(anotherToDo, toDoList.lastElementChild);

anotherToDo = document.createElement("li");
anotherToDo.textContent = "Mako shark";
toDoList.insertBefore(anotherToDo, toDoList.lastElementChild);