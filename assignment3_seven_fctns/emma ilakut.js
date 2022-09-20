// Class Food
const Food = (type, foodValue, chef, color, daysEaten)=>{
    this.type = type;
    this.foodValue = foodValue;
    this.chef = chef;
    this.color = color;
    this.daysEaten = daysEaten;
}
const chapati = new Food("wheat", "Carbohydrates", "Reuben", "brown",6);
const potato = new Food("Legume", "Starch", "Priscilla", "white", 3 );
const cassava = new Food("Legume", "Carbohydrate", "Emma", "white", 2 );


// Class Aircrafts
function Aircrafts(manufacturer, make , capacity, captain, operator){
    this.manufacturer = manufacturer;
    this.make = make;
    this.capacity = capacity;
    this.captain = captain;
    this.operator = operator;
}
let neo = new Aircrafts("Airbus", 2003, 5000, "Ikara", "Emirates");
let bombardier = new Aircrafts("Boeing", 1998, 40000, "Ozzy", "Qatar");
let caravan  = new Aircrafts("Boeing", 1998, 40000, "Ozzy", "Qatar");

// class Furniture
function Furniture(color, type, location, cost, owner ){

    this.color = color;
    this.type = type;
    this.location = location;
    this.cost = cost;
    this.owner= owner;

}
const chair = new Furniture("Black", "Wooden", "Kampala", 39990002, "Rajiv");
const table = new Furniture("Brown", "Metallic", "China", 40000, "Vrajesh");
const wardrobe = new Furniture("Cream", "Wooden", "Bangladesh", 3000, "Simon");

// Class Employees
class Employee {
    constructor(name, salary, empID, dateofAppoitment, role){
        this.name = name;
        this.salary = salary;
        this.empID = empID;
        this.dateofAppoitment = dateofAppoitment;
        this.role= role
    }
    
}
let sec = new Employee("JohnBlaq", 400000, "E001", 9/12/2001, "Secretary");
let Jab = new Employee("Timo", 60000, "E002", 1/3/1996, "Human Resource");
let Ken = new Employee("Sunita", 5000, "E003", 2/4/1990, "General");

// Class  Musician
class Musician {
    constructor(award ,revenue){
        this.award = award;
        this.revenue = revenue;

    }
    earnings(){
        const tax = 1000;
        const money = this.revenue - tax;
        return money;
    }
}
var burnaBoy = new Musician("Grammy", 50000);
console.log('Burnas earnings are USD: %d', burnaBoy.earnings());


// class Phone
const Phone= {
    manufacturer: "Apple",
    type:"iPhone 14",
    flagShip: function(){
        return this.manufacturer + " " + this.type; 
    }  
}
console.log(Phone.flagShip());


// class House
const House= (developer, cost)=>{
    this.developer = developer;
    this.cost = cost;

}
const Bungalow = new House("Ruparelia Group", 20000);
const Flat = new House("Reil Estates", 60000);
console.log(Bungalow);
console.log(Flat);
