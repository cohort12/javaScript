const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const html = document.documentElement;


// Styling the existing shark list
for(let element of ul.children){
    element.style.background = "gold";
}

document.body.children[3].lastElementChild.style.background = "green";

const tiger = ul.children[1];

tiger.nextElementSibling.style.background = "coral";
tiger.previousElementSibling.style.background = "aquamarine";

// *****Assignment 4*****
// ****Adding More Sharks Using an Array*****

let Shark = ["Blacktip Shark","Oceanic Whitetip Shark","Dark Shark"];
let numberOfNewShark= Shark.length, i;

for(i=0; i < numberOfNewShark; ++i){
 const moreShark = document.createElement('li');
    moreShark.innerText = Shark[i];
    ul.appendChild(moreShark).style.background = "pink";
}

