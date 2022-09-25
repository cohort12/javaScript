document.body.style.backgroundColor = "darkgreen";

/*DEFINING THE PROBLEM: 
1. Create and store a list of shark names for adding to an already existing <ul>
2. For each item in the list, 
    a.) create a list item to add to the <ul> list already created;
    b.) add one of the shark names from the list in 1 above
    c.) add this list item to the <ul> list existing
    d.) repeat this for the rest of the shark items in list in 1 above until the list is completed.
--------------------------------------------------------------
--------------------------------------------------------------

*/

// First create the list of shars as an array as below:

const restOfSharks = [
    "Bull shark",
    "Blue shark",
    "Shortfin mako",
    "Whale shark",
    "Whitetip",
    "Basking",
    "Hammerhead",
    "Requiem",
    "Dusky",
    "Sand tiger",
    "Great hammerhead",
    "Mackerel",
    "Scalloped",
    "Silky",
    "Carpet",
    "Blacktip reef",
    "Smooth hammerhead",
    "Bluntnose",
    "Porbeagle",
    "Sandbar",
    "Catshark",
    "Blacknose",
    "Zebra shark"
];

const sharkList = document.querySelector("ul");
const newShark = document.createElement("li");
const newShark1 = document.createElement('li');
const newShark2 = document.createElement('li');
const newShark3 = document.createElement('li');
const newShark4 = document.createElement('li');
const newShark5 = document.createElement('li');





newShark.textContent = "Zebra shark";
sharkList.appendChild(newShark);

newShark1.textContent = "Blacknose";
sharkList.appendChild(newShark1);

newShark2.textContent = "Catshark";
sharkList.appendChild(newShark2);

newShark3.textContent = "Sandbar";
sharkList.appendChild(newShark3);

newShark4.textContent = "Porbeable";
sharkList.appendChild(newShark4);

newShark5.textContent = "Bluntnose";
sharkList.appendChild(newShark5);

// function appendSharks() {
//     for (i = 0; i <= restOfSharks.length; i++) {
//         newShark.textContent = restOfSharks[i];
//         sharkList.appendChild(newShark);
//         return newShark;
//     }
    // newShark.textContent = restOfSharks[1];
    // sharkList.appendChild(newShark);
// }
// appendSharks();

// // function increaseSharkList () {
    // for (shark = 0; shark <= restOfSharks.length; shark++) {
    //         newShark.textContent = restOfSharks[1];
    //         sharkList.appendChild(newShark);
    //     }
//         return newShark;
//     // }

//     // increaseSharkList();

function addMeSharks() {
for (let i = 0; i < restOfSharks.length; i++) {
    let newShark = document.createElement("li");
    newShark.appendChild(document.createTextNode(restOfSharks[i]));
    ul.appendChild(newShark);
}
// return newShark;
}