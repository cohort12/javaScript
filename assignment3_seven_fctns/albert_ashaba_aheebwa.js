// 1
function Novel(name, author, datePublished, numPages) {
	this.name = name;
	this.author = author;
	this.datePublished = datePublished;
	this.numPages = numPages;
}

let novel_1 = new Novel("The Hitch Hiker's Guide to the Galaxy", "Douglas Adams", 1980, 400);
console.log(novel_1);
let novel_2 = new Novel("Restaurant at the End of the Universe", "Zaphod Beeblebrox", 1982, 200);

// 2
let sayHello = () => {
	console.log("Hello, World");
};

sayHello();

// 3
let sayHelloAgain = () => "Hello World";
console.log(sayHelloAgain());

// 4
class CarPark {
	constructor(name, address, numOfCars) {
		this.name = name;
		this.address = address;
		this.numOfCars = numOfCars;
	}
	park() {
		return "We are Parking your Car";
	}
}

var garage = new CarPark("Hard Washer", "Oogblon Zeta 5", 35);
console.log(garage.park());

// 5
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	age() {
		let date = new Date();
		return date.getFullYear() - this.year;
	}
}

var newCar = new Car("Aston Martin", 2021);

console.log(`My car is ${newCar.age()} years old.`);

// 6
const message = () => {
	const name = "Albert";
	const age = 86;
	return name + " is " + age + " years old.";
};

console.log(message());

// 7
const person = {
	firstName: "Albert",
	lastName: "Ashaba Aheebwa",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

console.log(person.fullName());

// End of the seven fuctions.
