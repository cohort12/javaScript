const dom = document;

const ul = dom.querySelector('ul');

const fishyShark = dom.createElement('li');
fishyShark.textContent = 'Fishy Shark';

const edibleShark = dom.createElement('li');
edibleShark.textContent = 'Edible Shark';

const smellyMouthShark = dom.createElement('li');
smellyMouthShark.textContent = 'Smelly Mouth Shark';

ul.appendChild(fishyShark);
ul.appendChild(edibleShark);
ul.appendChild(smellyMouthShark);