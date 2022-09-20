//define 7 parameterised class with alteast 5 parameters
// using the < this > new woed and atleast 3 instances using the < new> keyword.by 4pm on github tomorrow
var yr11 = "##############----------BEER-----------##############"
console.log(yr11);
function beer (namez, color, brand, alc_pcentage, price, quantity)  {
    this.namez = namez;
    this.color = color;
    this.brand = brand;
    this.alc_pcentage = alc_pcentage;
    this.quantity = quantity;
   this.price = price;
}
let guiness = new beer("Guiness \n", "Black \n", "Stout \n", "5% \n" , "0.5 L \n", "UGX 4500")
let bell = new beer("Bell \n", "Gold \n", "Larger \n", "8% \n", "0.7L \n", 4000)
let siminoff = new beer("Siminoff \n", "Clear \n", "Ice_Red \n", "10% \n", "0.9L \n", 3500)
var yr1 = "#----------Guiness-----------#"
console.log(yr1);
console.log(guiness.namez + guiness.color + guiness.brand + guiness.alc_pcentage + guiness.price + guiness.quantity)
var yr2 = "#----------Bell-----------#"
console.log(yr2);
console.log(bell.namez + bell.color + bell.brand + bell.alc_pcentage + bell.price + bell.quantity)
var yr3 = "#----------Siminoff-----------#"
console.log(yr3);
console.log(siminoff.namez + siminoff.color + siminoff.brand + siminoff.alc_pcentage + siminoff.price + siminoff.quantity)

var seperator = "#----------########################--KINGDOM---############################################-----------#"
console.log(seperator);


function kingdom(name , king,  tribe, location, dresscode, country) {

    this.name = name;
    this.king = king;
    this.tribe = tribe;
    this.location = location;
    this.dresscode = dresscode;
    this.country= country;
}
let Buganda = new kingdom("Buganda \n","Kabaka \n", "Luganda \n","Central \n", "Gomesi_and_Kanzu \n", "Uganda \n")
let Bunyoro = new kingdom("Bunyoro \n", "Omukama \n", "Runyoro \n", "West \n", "Mushanana_and_Kanzu \n", "Uganda \n")
let Busoga = new kingdom("Busoga \n","Kyabazinga \n", "Lusoga \n","East \n", "Kanzu \n", "Uganda \n")
var yr01 = "#----------Buganda-----------#"
console.log(yr01);
console.log(Buganda.name + Buganda.king + Buganda.tribe + Buganda.location + Buganda.dresscode + Buganda.country)
var yr02 = "#----------Bunyoro-----------#"
console.log(yr02);
console.log(Bunyoro.name + Bunyoro.king + Bunyoro.tribe + Bunyoro.location + Bunyoro.dresscode + Bunyoro.country)
var yr03 = "#----------Busoga-----------#"
console.log(yr03);
console.log(Busoga.name + Busoga.king + Busoga.tribe + Busoga.location + Busoga.dresscode + Busoga.country)

var seperator0 = "#----------########################---PHONE--############################################-----------#"
console.log(seperator0);

function phone  (name, brand, color, ram, rom, sim, price1)  {
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.ram = ram;
    this.rom = rom;
    this.sim = sim;
     this.price = price1;
  
}
let s10_plus = new phone("s10_plus \n", "Black \n", "Samsung \n", "8 GB \n", "128 GB \n","normal \n", 45000000)
let P20_pro = new phone("P20_Pro \n", "Gold \n", "Huawei \n", "12 GB \n", "320 GB \n","nano \n", 60000000)
let iphone_11 = new phone("iphone_11 \n", "Silver \n", "Apple \n", "4GB \n", "64 GB \n", "micro \n", 80000000)
var yr21 = "#----------s10_Plus-----------#"
console.log(yr21);
console.log(s10_plus.name + s10_plus.color + s10_plus.brand + s10_plus.ram + s10_plus.rom + s10_plus.sim + s10_plus.price)
var yr22 = "#----------P20_Pro-----------#"
console.log(yr22);
console.log(P20_pro.name + P20_pro.color + P20_pro.brand + P20_pro.ram + P20_pro.rom +P20_pro.sim + P20_pro.price)
var yr23 = "#----------Iphone 11-----------#"
console.log(yr23);
console.log(iphone_11.name + iphone_11.color + iphone_11.brand + iphone_11.ram + iphone_11.rom + iphone_11.sim + iphone_11.price)

var seperator1 = "#----------########################--Soda---############################################-----------#"
console.log(seperator1);


function soda (name, color, brand, exp_date, quantity,price)  {
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.exp_date = exp_date;
    this.quantity = quantity;
   this.price = price;
}
let coke = new soda("Coke \n", "Black \n", "cocacola \n", "AUG/02/2022 \n" , "0.5 L \n", "UGX 4500")
let funtime = new soda("Riham Funtime \n", "Orange \n", "Harris International \n","SEPT/12/2022 \n","1 L \n", 4000)
let Mt_dew = new soda("Mountain Dew \n", "Green \n", "Pepsi \n","OCT/30/2022 \n", "0.9L \n", 3500)
var yr1 = "#----------Coke-----------#"
console.log(yr1);
console.log(coke.name + coke.color + coke.brand + coke.exp_date + coke.quantity+ coke.price)
var yr2 = "#----------Riham Funtime-----------#"
console.log(yr2);
console.log(funtime.name + funtime.color + funtime.brand + funtime.exp_date + funtime.quantity+ funtime.price)
var yr3 = "#----------Mountain Dew-----------#"
console.log(yr3);
console.log(Mt_dew.name + Mt_dew.color + Mt_dew.brand + Mt_dew.exp_date + Mt_dew.quantity + Mt_dew.price)


var seperator41 = "#----------########################--AEROPLANE---############################################-----------#"
console.log(seperator41);

function plane (name, color, manufucturer, seat_capacity, country, number, price)  {
    this.name = name;
    this.color = color;
    this.manufucturer = manufucturer;
    this.seat_capacity = seat_capacity;
    this.country = country;
    this.number = number;
    this.price = price;
}
let plane_1 = new plane("Uganda Airlines\n", "White \n", "Airbus \n", "200 passangers \n" , "Uganda \n","N904DE \n", "$ 4500000")
let plane_2 = new plane("Kenya Airways \n", "Red \n", "Bombadier \n", "500 passangers \n", "Kenya \n","A5678BD \n", "$ 40000000")
let plane_3 = new plane("Rwander Air \n", "Blue \n", "Boeing \n", "700 passangers \n", "Rwanda \n","R564GK \n",  "$ 35000000")
var yr41 = "#----------Uganda Airlines-----------#"
console.log(yr41);
console.log(plane_1.name + plane_1.color + plane_1.manufucturer + plane_1.seat_capacity + plane_1.country + plane_1.number + plane_1.price)
var yr42 = "#----------Kenya Airways-----------#"
console.log(yr42);
console.log(plane_2.name + plane_2.color + plane_2.manufucturer + plane_2.seat_capacity + plane_2.country + plane_2.number + plane_2.price)
var yr43 = "#----------Rwanda Air-----------#"
console.log(yr43);
console.log(plane_3.name + plane_3.color + plane_3.manufucturer + plane_3.seat_capacity + plane_3.country + plane_3.number + plane_3.price)

var seperator_p = "#----------########################--EXTENTION---############################################-----------#"
console.log(seperator_p);


function extention(name, color, ways_number, country_of_origin, wire_diameter, rating, price) {
	this.name = name;
	this.color = color;
	this.ways_number = ways_number;
	this.country_of_origin = country_of_origin;
	this.wire_diameter = wire_diameter;
	this.rating = rating;
	this.price = price;
}
let extention_1 = new extention(
	'Power king \n',
	'White \n',
	'8 \n',
	'China \n',
	'0.35 mm \n',
	'60HZ, 240V \n',
	'$ 4560'
);
let extention_2 = new extention(
	'Oraimo \n',
	'Grey \n',
	'6 \n',
	'Uganda \n',
	'0.4 mm \n',
	'50HZ, 250V \n',
	'$ 4546'
);
let extention_3 = new extention(
	'GEEPASS \n',
	'Black \n',
	'4 \n',
	'USA \n',
	'0.5 mm \n',
	'50HZ-60HZ, 230V \n',
	'$ 3872'
);
var yr51 = '#----------POWER KING-----------#';
console.log(yr51);
console.log(
	extention_1.name +
		extention_1.color +
		extention_1.ways_number +
		extention_1.country_of_origin +
		extention_1.wire_diameter +
		extention_1.rating +
		extention_1.price
);
var yr52 = '#----------ORAIMO-----------#';
console.log(yr52);
console.log(
	extention_2.name +
		extention_2.color +
		extention_2.ways_number +
		extention_2.country_of_origin +
		extention_2.wire_diameter +
		extention_2.rating +
		extention_2.price
);
var yr53 = '#----------GEEPASS-----------#';
console.log(yr53);
console.log(
	extention_3.name +
		extention_3.color +
		extention_3.ways_number +
		extention_3.country_of_origin +
		extention_3.wire_diameter +
		extention_3.rating +
		extention_3.price
);

var seperator_p1 =
	'#----------########################--TABLE---############################################-----------#';
console.log(seperator_p1);

function table(color, make, country_of_origin,material, length, width, height) {
	this.color = color;
    this.make = make;
    this.material = material;
	this.country_of_origin = country_of_origin;
	this.length = length;
	this.width = width;
	this.height = height;
}
let table_1 = new table(
	'Brown \n',
	'Wooden \n',
	'Burundi \n',
	'3m \n',
	'1m \n',
	'1.5m \n',
	
);
let table_2 = new table(
	'Clear \n',
	'Glass \n',
	'Uganda \n',
	'4m \n',
	'2m  \n',
	'1m \n',
	
);
let table_3 = new table(
	'Grey \n',
	'metalic \n',
	'Kenya \n',
	'6m \n',
	'5m \n',
	'2m \n',
	
);
var yr61 = '#----------Wooden-----------#';
console.log(yr61);
console.log(
	    table_1.color +
		table_1.make +
		table_1.country_of_origin +
		table_1.length +
		table_1.width +
		table_1.height 
		
);
var yr62 = '#----------ORAIMO-----------#';
console.log(yr62);
console.log(
	table_2.color +
		table_2.make +
		table_2.country_of_origin +
		table_2.length +
		table_2.width +
		table_2.height
);
var yr63 = '#----------GEEPASS-----------#';
console.log(yr63);
console.log(
	    table_3.color +
		table_3.make +
		table_3.country_of_origin +
		table_3.length +
		table_3.width +
		table_3.height
);
var seperator_p143 =
	'#----------########################--********  THE END  *********---############################-----------#';
console.log(seperator_p143);