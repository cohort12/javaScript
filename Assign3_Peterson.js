// Define 7 classes with at least 5 properties using <this> keyword and with at least 3 instances using the <new> keyword

//class1
class Hotel {
  constructor(ratings, name, location, stars, owner) {
    this.name = name;
    this.ratings = ratings;
    this.location = location;
    this.owner = owner;
    this.stars = stars;
  }
  checkRating() {
    if (this.ratings >= 4) {
      console.log("excellent");
    } else if (this.ratings >= 2 && this.ratings < 4) {
      console.log("average");
    } else {
      console.log("poor");
    }
  }
}
let sheraton = new Hotel(4, "sheraton", "kampala", "5 star", "janet");
let jeju = new Hotel(1, "jeju", "nansana", "1 star", "mategyero");
console.log(sheraton.name);
console.log(sheraton.owner);
sheraton.checkRating();
jeju.checkRating();

//class2
class Church {
  constructor(name, location, pastor, denomination, inception_year) {
    this.name = name;
    this.location = location;
    this.pastor = pastor;
    this.denomination = denomination;
    this.inception_year = inception_year;
  }
  checkOldest() {
    if (this.inception_year <= 1900) {
      console.log("longest serving");
    } else if (this.inception_year > 1900) {
      console.log("current");
    }
  }
}
let NansanaBibleChurch = new Church(
  "Nansana Bible Church",
  "Nabweru",
  "Tayebwa",
  "Baptist",
  2015
);
let NamirembeCathedral = new Church(
  "Namirembe Cathedral",
  "Kampala",
  "Bishop Steven",
  "Anglican",
  1989
);
console.log(NansanaBibleChurch.pastor);
console.log(NansanaBibleChurch.location);
NamirembeCathedral.checkOldest();