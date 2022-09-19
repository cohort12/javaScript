function Library(bookTitle, bookAuthor, numberOfCopies, yearPublished, countryOfOrigin) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.numberOfCopies = numberOfCopies;
    this.yearPublished = yearPublished;
    this.countryOfOrigin = countryOfOrigin;

}

let book1 = new Library("Mindset", "Carol S. DWECK", 2000, "1998", "Uganda");
let book2 = new Library("Outliers", "Malcolm Gladwell", 1000, "1897", "USA");
let book3 = new Library("How to get away with murder", "Peter Norwalk", 300, "USA");
console.log(book1);
console.log(book2);

class Lunch{
    constructor(food, sauce, salad, juice){
        this.food = food;
        this.sauce = sauce;
        this.salad = salad;
        this.juice = juice;
    }
    health (){
        return "Our Lunch is boiled"
    }
}
let lunchBox1 = new Lunch("Matooke", "G.Nuts", "Fruit Salad", "Milk Meld");
let lunchbox2 = new Lunch("Rice", "Beef", "Veg Salad", "Passion");
let lunchBox3 = new Lunch("Posho", "Beans", "Fruit Salad", "Cocktail");
console.log(lunchBox1);

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