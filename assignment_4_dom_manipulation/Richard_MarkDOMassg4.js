const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const html = document.documentElement;

console.log(p.parentNode);
console.log(p.parentNode.parentNode.parentNode.parentNode);
console.log(html.parentNode);

console.log(ul.childNodes)

ul.firstElementChild.style.background = "yellow"

for(let element of ul.children){
    element.style.background = "gold"
}

document.body.children[3].lastElementChild.style.background = "fuchsia";

const tiger = ul.children[1]

tiger.nextElementSibling.style.background = "coral"
tiger.previousElementSibling.style.background = "aquamarine"


const shark = document.querySelector("ul");
const shark4 = document.createElement("li");
shark4.textContent = "Jonah Shark";

shark.appendChild(shark4);

const shark5 = document.createElement("li");
shark5.textContent = "Baby Shark";

shark.appendChild(shark5);


const shark6 = document.createElement("li");
shark6.textContent = "South pacific Shark";

shark.appendChild(shark6);



shark4.style.background = "green";

shark5.style.background = "gold";

shark6.style.background = "cyan";








