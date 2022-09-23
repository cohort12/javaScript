const ul = document.getElementById("list");

listOfSharks = ["Another Shark", "Another Second Shark", "Maybe a Whale", "That is a Dolphin"];

for (i = 0; i < listOfSharks.length; i++) {
	let li = document.createElement("li");

	li.appendChild(document.createTextNode(listOfSharks[i]));
	ul.appendChild(li);
}
