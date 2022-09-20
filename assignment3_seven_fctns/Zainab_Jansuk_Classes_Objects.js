console.log('************************ The first Class **************************');
function Library(bookTitle, bookAuthor, numberOfCopies, yearPublished, countryOfOrigin) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.numberOfCopies = numberOfCopies;
    this.yearPublished = yearPublished;
    this.countryOfOrigin = countryOfOrigin;

}

let book1 = new Library("Mindset", "Carol S. DWECK", 2000, "1998", "Uganda");
let book2 = new Library("Outliers", "Malcolm Gladwell", 1000, "1897", "USA");
let book3 = new Library("How to get away with murder", "Peter Norwalk", 300, "2000", "USA");
console.log(book1);
console.log(book2);
console.log(book3);
console.log("\n");

console.log('************************ The second Class **************************');

function Monarchy(king, queen, gender, grandsons) {
    this.king = king;
    this.queen = queen;
    this.grandsons = grandsons;
    this.gender = gender;
}

Monarchy.prototype.alive = function(){
    if(this.king.living){
        return `King ${this.king.kname} is alive and below are his grandsons: `;
    } else if(this.queen.living){
        return `Queen ${this.queen.qname} is alive`;
    } else {
        return 'Neither the queen nor king is alive'
    }
}

Monarchy.prototype.gSons = function(){
    for(let i = 0; i < this.grandsons.length; i++) {
        console.log(`Grandson ${i + 1} is ${this.grandsons[i].gname} and is ${this.grandsons[i].age} years`);
    }
}

let kingdom = new Monarchy({kname: "John", living: true}, {qname: "Catherine", living: false}, 'female', [{gname: "Charles", age: 33, living: true}, {gname: "Andrew", age: 22, alive: false}]);
console.log(kingdom.alive());
console.log(kingdom.gSons());
console.log("\n");

console.log('************************ The Third Class **************************');

class Lunch{
    constructor(food, sauce, salad, juice){
        this.food = food;
        this.sauce = sauce;
        this.salad = salad;
        this.juice = juice;
    }
    health(){
        return "Our Lunch is boiled";
    }
}
let lunchBox1 = new Lunch("Matooke", "G.Nuts", "Fruit Salad", "Milk Meld");
let lunchBox2 = new Lunch("Rice", "Beef", "Veg Salad", "Passion");
let lunchBox3 = new Lunch("Posho", "Beans", "Fruit Salad", "Cocktail");
console.log(lunchBox1);
console.log(lunchBox2);
console.log(lunchBox3.health());
console.log("\n");

console.log('************************ The Fourth Class **************************');

class Marrying {
    constructor(pName, pStatus) {
        this.pName = pName;
        this.pStatus = pStatus;
    }

    married() {
        if(this.pStatus) {
            return `${this.pName} is married`;
        } else {
            return `${this.pName} is not  married`;
        }
    }
}

let person1 = new Marrying("Jansuk", false);
let person2 = new Marrying("Zainab", false);
let person3 = new Marrying("Ozzy", true);

console.log(person1.married());
console.log(person2.married());
console.log(person3.married());
console.log('\n');

console.log('************************ The fifth Class **************************');

class Home{
    constructor(father, mother, numberKids, location, yearsInMarriage){
        this.father = father;
        this.mother = mother;
        this.numberKids = numberKids;
        this.location = location;
        this.yearsInMarriage = yearsInMarriage;
    }
    mood(){
        return "Happy Wife, Happy Home"
    }
}
let home1 = new Home("Janz", "Martha", 2, "Kawempe", 3);
let home2 = new Home("Mike", "Olivia", 3, "Kiwatule", 2);
let home3 = new Home("Val", "Mercy", 5, "Najjera", 4)
console.log(home1)
console.log("\n");

console.log('************************ The sixth Class **************************');

class Apartments {
    constructor(location, totalRooms, roomsOccupied, aprtName) {
        this.location = location;
        this.totalRooms = totalRooms;
        this.roomsOccupied = roomsOccupied;
        this.aprtName = aprtName;
    }

    checkAvailableRooms() {
        if(this.totalRooms === this.roomsOccupied) {
            return `All ${this.totalRooms} rooms in ${this.aprtName} apartments are occupied`;
        } else{
            return `Only ${this.totalRooms - this.roomsOccupied} rooms are left in ${this.aprtName} apartments to occuppy`;
        }
    }
}

let aprt1 = new Apartments('Kawempe', 200, 40, 'Janz');
console.log(aprt1.checkAvailableRooms());

let aprt2 = new Apartments('Najjera', 400, 400, 'Zainab');
console.log(aprt2.checkAvailableRooms());
console.log('\n');

console.log('************************ The seventh Class **************************');

function SportsLeague(leagueName, teamName, positionInLeague) {
    this.leagueName = leagueName;
    this.teamName = teamName;
    this.positionInLeague = positionInLeague;

}

SportsLeague.prototype.checkChampionsLeagueSpot = function () {
    if(this.positionInLeague === 1) {
        return `${this.teamName} has won the ${this.leagueName} title and qualifies for champions leagueName`;
    } else if(this.positionInLeague > 1 && this.positionInLeague <= 4) {
        return `${this.teamName} qualifies for a champions League spot`;
    } else {
        return `${this.teamName} is good for farmer's league`;
    }
}

let team1 = new SportsLeague('Premier League', 'Manchester City', 1);
console.log(team1.checkChampionsLeagueSpot());

let team2 = new SportsLeague('Spanish League', 'Barcelona', 1);
console.log(team2.checkChampionsLeagueSpot());

let team3 = new SportsLeague('Premier League', 'Arsenal', 2);
console.log(team3.checkChampionsLeagueSpot());

let team4 = new SportsLeague('Premier League', 'Manchester United', 6);
console.log(team4.checkChampionsLeagueSpot());