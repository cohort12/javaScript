// Craig Byakola
// Kayondo Terry

function Book(title, author, genre, year, rating) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.year = year;
  this.rating = rating;
}
let book1 = new Book(
  "The Name of the Wind",
  "Patrick Rothfuss",
  "Fantasy",
  2007,
  4.5
);
let book2 = new Book(
  "The Way of Kings",
  "Brandon Sanderson",
  "Fantasy",
  2010,
  4.6
);
let book3 = new Book(
  "The Fellowship of the Ring",
  "J.R.R Tolkien",
  "Fantasy",
  1954,
  4.4
);

console.log(book1);
console.log(book2);
console.log(book3);

function Game(title, year, publisher, developer, genre) {
  this.title = title;
  this.year = year;
  this.publisher = publisher;
  this.developer = developer;
  this.genre = genre;
}
let game1 = new Game("God of War");
let game2 = new Game("Need for Speed Carbon");
let game3 = new Game("Grand Theft Auto San Andreas");

console.log(game1);
console.log(game2);
console.log(game3);

function Student(name, studentNumber, school, age, gpa) {
  this.name = name;
  this.studentNumber = studentNumber;
  this.school = school;
  this.age = age;
  this.gpa = gpa;
}
let student1 = new Student(
  "Mukasa Alfred",
  "4210001",
  "School of Colors",
  15,
  4.2
);
let student2 = new Student(
  "Barigye Mercy",
  "3090017",
  "School of Songs",
  18,
  4.0
);
let student3 = new Student("John Paul", "1", "School of Stories", 12, 4.8);

console.log(student1);
console.log(student2);
console.log(student3);

function Animal(name, numberOfLegs, sound, species, habitat) {
  this.name = name;
  this.numberOfLegs = numberOfLegs;
  this.sound = sound;
  this.species = species;
  this.habitat = habitat;
}
let animal1 = new Animal("Lion", 4, "roar", "Panthera leo", "Savanna");
let animal2 = new Animal(
  "Goat",
  4,
  "bleat",
  "Capra hircus",
  "Human settlements"
);
let animal3 = new Animal("Cat", 4, "meow", "Felis catus", "Human settlements");

console.log(animal1);
console.log(animal2);
console.log(animal3);

function Human(name, gender, race, age, nationality) {
  this.name = name;
  this.gender = gender;
  this.race = race;
  this.age = age;
  this.nationality = nationality;
}
let human1 = new Human("Rebecca", "Female", "Caucasian", 22, "Italian");
let human2 = new Human("Max", "Male", "Black", 35, "Kenyan");
let human3 = new Human("Tina", "Female", "Black", 17, "Sudanese");

console.log(human1);
console.log(human2);
console.log(human3);

function ProgrammingLanguage(name, creator, year, paradigm, type) {
  this.name = name;
  this.creator = creator;
  this.year = year;
  this.paradigm = paradigm;
  this.type = type;
}
let programmingLanguage1 = new ProgrammingLanguage(
  "Java",
  "James Gosling",
  1995,
  "Object Oriented",
  "High Level"
);
let programmingLanguage2 = new ProgrammingLanguage(
  "Prolog",
  "Alain Colmerauer with Philippe Roussel,",
  1972,
  "Logic",
  "High Level"
);
let programmingLanguage3 = new ProgrammingLanguage(
  "Elixir",
  "Jose Valim",
  2012,
  "Functional",
  "High Level"
);

console.log(programmingLanguage1);
console.log(programmingLanguage2);
console.log(programmingLanguage3);
