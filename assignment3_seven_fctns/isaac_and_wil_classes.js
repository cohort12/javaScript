// ASSIGNMENT
// Define seven classes with at least 5 parameters using the <this> keyword and with at least 3 instances using the <new> keyword. Due Tue 4pm on Github.

/* ....Class one.................*/
function Insect(ordername, commonname, adultmouthparts, wings, origin) {
    this.ordername = ordername;
    this.commonname = commonname;
    this.adultmouthparts = adultmouthparts;
    this.hasWings = wings;
    this.origin = origin;
}

let prot = new Insect("Protura", "Proturans", "Chewing", "True", "Egypt");
let coll = new Insect("Collembola", "Springtails", "Chewing", "False", "India");
let eph = new Insect("Ephemoroptera", "Mayflies", "Vestigial", "True", "Tanzania");

// console.log(prot.adultmouthparts + " " + prot.ordername);

/*....Class Two......*/
function Student(fname, lname, age, fees, school) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.fees = fees;
    this.school = "Hermit International School";
}

let phil = new Student("Masika", "Phillips", 2, 1000000);
let joel = new Student("Joel", "Mirimo", 7, 4000000);
let san = new Student("Sandy", "Ghallagher", 4, 89000);

// console.log(san);

/*....Class Three......*/
 function GrocItem(iname, iorigin, iquantitiy, icost){
    this.itemName = iname;
    this.itemMadeIn = iorigin;
    this.itemQuantity = iquantitiy;
    this.itemCost = icost;
    this.itemTotalCost = this.itemQuantity * this.itemCost;
 }

 let blueb = new GrocItem("Blue Band", "Kenya", 5, 200,);
 let sucrose = new GrocItem("Sugar", "Kakira", 1000, 3500);
 let bathingSop = new GrocItem("Geisha", "Palmolive", 250, 4000);

//  console.log(blueb);
//  console.log(sucrose);
//  console.log(bathingSop);

/*....Class Four......*/

function Cellphone(phname, phbrand, phcolor, phprice, phmemory){
    this.phoneName = phname;
    this.phoneBrand = phbrand;
    this.phoneColor = phcolor;
    this.phonePrice = phprice;
    this.phoneMemory = phmemory;
}

var phoneA = new Cellphone("Cmon10", "TECHNO", "Grey", 300000, 64);
var phoneB = new Cellphone("Tx12", "Infinix", "Blue", 450000, 128);
var phoneC = new Cellphone("iPhone", "Apple", "Black", 2500000, 250);

// console.log(phoneC);

/*....Class Five......*/

function District(dname, dregion, dpop, dhqtrs, dmaincrop){
    this.distName = dname;
    this.distRegion = dregion;
    this.districtPopulation = dpop;
    this.districtHeadquarters = dhqtrs;
    this.districtCashCrop = dmaincrop;
}

let dist1 = new District("Wakiso", "Central", 27000000, "Wakiso", "Maize");
let dist2 = new District("Hoima", "Central", 8000000, "Hoima Town", "Beans");
let dist3 = new District("Karamoja", "Northern", 3000000, "Kaberamaido", "Millet");

// console.log(dist2.distName + " " + dist1.districtCashCrop);

/*....Class Six......*/
function Sport(sname, sorigin, steam, slocation, gduration){
    this.sportName = sname;
    this.sportOrigin = sorigin;
    this.noOfPlayers = steam;
    this.sporttLocation = slocation;
    this.gameDuration = gduration;
}

let bball = new Sport("Basket ball", "USA", "14", "Both", "90");
let ltennis = new Sport("Lawn tennis", "Russia", 2, "Outdoor", 45);
let fball = new Sport("Football", "Germany", 11, "Outdoor", 90);

// console.log(ltennis);

/*....Class Seven......*/

function Course(cname, cduration, ctype, cfees, clevel){
    this.courseName = cname;
    this.courseDuration = cduration;
    this.courseType = ctype;
    this.courseFees = cfees;
    this.courseLevel = clevel;
}

var c001 = new Course("Biology Essetials", "60", "Parttime", 850, "Undergraduate");
var c002 = new Course("Mechanical Engineering", 95, "Fulltime", 9000, "Undergraduate");
var c003 = new Course("Project Management", 47, "Parttime", 350, "Postgraduate");

console.log(c003);
