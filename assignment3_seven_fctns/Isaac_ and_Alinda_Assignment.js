//class 1

function Newspaper(name,company,date,location){
    this.paperName = name;
    this.paperCompany = company;
    this.paperDate = date;
    this.paperlocation = location;

 }

 let newspaper1 = new Newspaper("Daily Monitor", "Monitor", 01-09-2022, "Namwoogo");
 let newspaper2 = new Newspaper("New Vision","Vision_Group", 10-09-2022, "Industrial area");

 console.log(newspaper1);
 console.log(newspaper2);

//class 2

 function Radio(name, frequency, location){
    this.radioName = name;
    this.radioFrequency = frequency;
    this.radiolocation = location;
   
 }
 let radio1 = new Radio("Capital FM", 91.3, "Kisementi");
 let radio2 = new Radio("KFM",  93.3, "Namwoogo");

 console.log(radio1);
 console.log(radio2);

 //class 3

 function Church(name, Numofleaders, location, size){
    this.cName = name;
    this.cNumofleaders = Numofleaders;
    this.clocation = location;
    this.cSize = size;
   
 }
 let church1 = new Church("St.Francis Chapel", 3, "Makerere", "medium");
 let church2 = new Church("Watoto Church",  4, "Ntinda", "Big");

 console.log(church1.cName);
 console.log(church2.clocation);


//class 4

 function Mosque(name, Numofleaders, location, size, Numofpeople){
    this.mName = name;
    this.mNumofleaders = Numofleaders;
    this.mlocation = location;
    this.mSize = size;
    this.mNumofpeople = Numofpeople;
   
 }
 let mosque1 = new Mosque("Old kampala Mosque", 4, "Old Kampala", "Big", 12000);
 let mosque2 = new Mosque("Kawempe Mosque",  3, "Kawempe", "small", 200);

 console.log(mosque1);
 console.log(mosque2.mNumofleaders);

//class 5

 function Continent(name, country, populationSize, typeOfpeople){
    this.contName = name;
    this.contCountry = country;
    this.contSize = populationSize;
    this.contTypeOfpeople = typeOfpeople;
   
 }
 let continent1 = new Continent("Africa", "Uganda", 1000000000, "Ugandans");
 let continent2 = new Continent("Europe",  "England", 3000000000, "English");

 console.log(continent1);
 console.log(continent2);

///Class 6

 function Fruit (name, color, size, nutrient){
   this.fName = name;
   this.fColor = color;
   this.fSize = size;
   this.fNutrient = nutrient;
 }
  let fruit1 = new Fruit("Jackfruit", "orange", "medium", "Vitamins");
  let fruit2 = new Fruit("Mango", "yellow", "small", "Vitamins");

console.log(fruit1.fName);
console.log(fruit2.fNutrient);

//class 7

let years = () => "How old are you?"


console.log(years());

//class 8

function Transport (means, charge, speed){
   this.tMeans = means;
   this.tCharge = charge;
   this.fSpeed = speed;
 
 }
  let transport1 = new Transport("Air", 5000000, 2400);
  let transport2 = new Transport("Water", 3500000, 2000);

console.log(transport1);
console.log(transport2);



 



