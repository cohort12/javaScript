
// this key word//
function motorCycle (price,name,year,company,owner) {
    this.price = price;
    this.name = name;
    this.year = year;
    this.company = company;
    this.owner = owner;
}
let motorCycle1 = new motorCycle(2000000, "boxer", 2007, "Homda", "Xron");
let motorCycle2 = new motorCycle(300000, "Tvs", 2006, "Sukuzu", "Bron");

console.log(motorCycle1.price);
console.log(motorCycle2.owner);

function meat (name,farmer,place,type,price){
    this.name = name;
    this.farmer = farmer;
    this.place = place;
    this.type = type;
    this.price = price;
}

let meat1 = new meat("pig", "Emma", "bukoto", "pork", 30000);
let meat2 = new meat ("cow", "Zron", "kisaas", "beef", 15000);

console.log(meat1);

function shoe (name, price, gender, origin, shop){
this.name = name;
this.price =price;
this.gender = gender;
this.origin = origin;
this.shop = shop;
}

let shoe1 = new shoe ("clarks", 40000, "male", "york", "d-shope");
let shoe2 = new shoe ( "higheels", 300000, "female", "kenya", "G-shoe");

console.log(shoe1);

function bags (type,size,price,color,company){
    this.type = type;
    this.size = size;
    this.price = price;
    this.color = color;
    this.company = company;
}

let bags1 = new bags("laptop-bag", "medium", 30000, "black", "Leazer-BZ");
let bags2 = new bags("paper-bag", "small", 2000, "green", "kfc");

console.log (bags1);


    function phones (name,type,company,color,price){
        this.name = name;
        this.type = type;
        this.company =company;
        this.color = color;
        this.price = price;
    }

    let phones1 = new phones("iphone14", "maxpro", "apple", "black", 3500000);
    let phones2 = new phones("tecno", "infinix hot8", "tecno", "white", 200000);

    console.log (phones1);

    function drinkingWater(name,company,price,location,size){
        this.name = name;
        this.company = company;
        this.price = price;
        this.location = location;
        this.size = size;
    }

    let drinkingWater1 = new drinkingWater("ice", "ice-company",1500, "bukoto","small");
    let drinkingWater2 = new drinkingWater("wavawater", "wava-company", 2000, "Kampala", "big");

    console.log(drinkingWater1);
    console.log(drinkingWater2);

    function Bible(format,version,language,year,price){
        this.format = format;
        this.version = version;
        this.language = language;
        this.year = year;
        this.price = price;
    }

    let Bible1 = new Bible("Online", "Kingjames", "english", 1900, 20000);
    let Bible2 = new Bible("Hardcopy", "NLV", "english", 1800, 15000);

    console.log (Bible1);