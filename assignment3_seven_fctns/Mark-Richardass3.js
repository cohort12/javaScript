	/****** No1 ********/
	function Wife(name, age, height, tribe, education){ this.name = name;
this.age = age;
this.height = height; 
	    this.tribe = tribe;
	this.education = education; } 
	var wife1 = new Wife("Madiina", 32, 170, "Mukiga", "University"); var wife2 = new Wife("Sarah", 30, 150, "Muganda", "University"); var wife3 = new Wife("Hajjati", 25, 160, "Musoga", "University"); /******** No2 ************/ 
	function Team(players, age, country, tournament, won){ 
this.players = players; this.age = age;
this.country = country; this.tournament = tournament; this.won = won; 
}
var Team1 = new Wife("Man U", 100, "UK", "Premier", 2010);
var Team2 = new Wife("Arsenal", 87, "UK", "Premier", 2022);
var Team3 = new Wife("Ajax", 40, "Netherlands", "Premier", 2019); 

/********* No3 *********/
class Mountain { 
constructor(name, height, country, age,type){ this.name = name;
this.height = height;
this.country = country; 
        this.age = age;
        this.type = type;
   }
getProperties(){
return("Name and height are: " + this.name + ", " + this.height + 
"feet.") } 
}
let mountain1 = new Mountain("Elgon", 5000, "Uganda", 500, "Block") 
console.log(mountain1);
let properties = mountain1.getProperties(); console.log(properties);

/********* No4 *************/
class Plane { 
constructor(name, model, yom, country, size){ this.name = name;
this.model = model;
this.yom = yom; 
this.country = country; 
        this.size = size;
   }
calcAge(currentYear){
return currentYear - this.yom; 
}
}
let plane = new Plane("Airbus", "A380", 2000, "France", 1000); let age = plane.calcAge(2022);
console.log(plane);
console.log(age) 

/******** No.5 **************/ 
function Home(house,father,mother,girls,boys){ 
    this.house = house;
    this.father = father;
    this.mother = mother;
    this.girls = girls;
    this.boys = boys;
}
var homekireka = new Home("large", "Richard","Jane",5,4); 
var homekla = new Home("medium","Moses","Annet", 2, 2); 
var homembra= new Home("small","Mark","Joan", 1,1); 
console.log(homekireka);

/*******  No.6 *************/
function Plant(leaves,stemtype,fruit,name,) { 
    this.leaves = leaves;
    this.stemtype = stemtype;
    this.fruit =fruit ; 
    this.name = name;
    this.color = "green";
}
var mango = new Plant("small","large","round","ebony");
var cassava = new Plant("small","short","long","newbreed"); 
var banana= new Plant("large","medium","ybananas","bogoya"); 
console.log(mango);
console.log(banana); 
