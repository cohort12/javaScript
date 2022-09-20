console.log("*******************Class 1********************");
function person(name,gender,age,height,education) {
    this.personName = name;
    this.personGender = gender ;
    this.personAge = age ;
    this.ppersonHeight = height ;
    this.personEducation = education ;
}

let person_1 = new person('Betty', 'F', '24', '160cm', 'Bachelors'); 
let person_2 = new person('Marvin','M','27','190cm','Masters'); 
let person_3 = new person('Henry', 'M','19','185cm','UACE');

console.log(person_1);
console.log(person_2);
console.log(person_3);

// 2
console.log("*******************Class 2********************");
function movie (name,releaseYear,genre,rating,language) {

    this.movieName = name;
    this.movieReleaseyear = releaseYear;
    this.movieGenre = genre;
    this.movieRating = rating;
    this.movieLanguage = language;

}

let movie_1 = new movie ('Peaky blinders', 2019 ,'Suspense','9/10','English');
let movie_2 = new movie ('Who killed Captain Alex', 2015 ,'Action/Comedy','10/10','Luganda');
let movie_3 = new movie ('Top gun', 2022 ,'Action','8/10','English');

console.log(movie_1);
console.log(movie_2);
console.log(movie_3);

// 3
console.log("*******************Class 3********************");
class books{
    constructor(name,author,year,rating,genre){
        this.bookName = name;
        this.bookAuthor = author;
        this.bookYear = year;
        this.bookRating = rating;
        this.bookGenre = genre;
    }
}

let book_1 = new books ('harry porter','Dennis', 2010,'9.5/10','Fiction');
let book_2 = new books ('Data Structure & Algos','Martha K', 2021,'10/10','Education');
let book_3 = new books ('Java','Elizabeth', 2022,'10/10','Education');
let book_4 = new books ('Kintu','Joan', 2015,'10/10','fiction');


console.log(book_1);
console.log(book_2);
console.log(book_3);
console.log(book_4);


// 4
console.log("*******************Class 4********************");
class cars{
    constructor(brand,model,year,type,drive) {
        this.carBrand = brand;
        this.carModel = model;
        this.carYear = year;
        this.carType = type;
        this.carDrive = drive;
    }

} 

let car_1 = new cars('Range Rover', 'Sport-SUV' , 2022, 'SUV', 'Auto');
let car_2 = new cars('Toyota', 'Wish' , 2003, 'Sedan', 'Manual');
let car_3 = new cars('Tesla', 'Model-X' , 2021, 'Sedan', 'Auto');


console.log(car_1);
console.log(car_2);
console.log(car_3);


// 5
console.log("*******************Class 5********************");
class cloud{
    constructor(name,color,altitude,texture,weather) {
        this.name = name;
        this.color = color;
        this.altitude = altitude;
        this.texture = texture;
        this.weather = weather;
    }

} 

let cloud1 = new cloud('Cirrus', 'Grey', 'High level' , 'Wispy', 'Windy');
let cloud2 = new cloud('Altocumulus', 'Grey and white' , 'Middle level', 'Fluffy', 'Light rain');
let cloud3 = new cloud('Stratus', 'Dark gray', 'Low level', 'Sheet-like', 'Drizzle');


console.log(cloud1);
console.log(cloud2);
console.log(cloud3);


// 6
console.log("*******************Class 6********************");
class pet{
    constructor(animal,owner,name,breed,age) {
        this.animal = animal;
        this.owner = owner;
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

} 

let pet1 = new pet('Cat', 'Steven' , 'Chico', 'British short hair', 4);
let pet2 = new pet('Dog', 'Allan' , 'Zeus', 'Grey Hound', 7);
let pet3 = new pet('Horse', 'Allen' , 'Idalgo', 'Morgan Horse', 3);


console.log(pet1);
console.log(pet2);
console.log(pet3);


// 7
console.log("*******************Class 7********************");
class song{
    constructor(name,genre,artist,duration,releaseYr) {
        this.name = name;
        this.genre = genre;
        this.artist = artist;
        this.duration = duration;
        this.releaseYr = releaseYr;
    }

} 

let song1 = new song('Shape of You', 'Pop', 'Ed Sheeran' , '03:53', 2017);
let song2 = new song('Blinding Lights', 'R&B /Soul' , 'The Weeknd', '03:20', 2019);
let song3 = new song('Tones and I', 'Pop', 'Dance Monkey', '03:29', 2019);


console.log(song1);
console.log(song2);
console.log(song3);



