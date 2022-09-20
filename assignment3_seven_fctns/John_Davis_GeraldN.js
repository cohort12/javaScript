//Define seven classes with atleast 5 parameters using the <this> keyword and with atleast  3 instances using the <new> keyword.

function Sneaker(name, color, size, label, price){
    this.sName = name;
    this.sColor = color;
    this.sSize = size;
    this.sLabel = label;
    this.sPrice = price;
 }
 let sneaker1 = new Sneaker('Sports', 'black', 45, 'Nike', 120000);
 let sneaker2 = new Sneaker('Fashion', 'lightblue', 43, 'Jordan', 150000);
 let sneaker3 = new Sneaker('Jungle', 'black', 45, 'Bata', 200000);
 console.log(sneaker1);
 console.log(sneaker2);
 console.log(sneaker3);
 
 
 function Tree(name, size, type, age, price){
     this.tName = name;
     this.tSize = size;
     this.tType = type;
     this.tAge = age;
     this.tPrice = price;
 }
 
 let tree1 = new Tree('Pine', 'big', 'softwood', 2 , 100000);
 let tree2 = new Tree('Eucalyptus', 'big', 'hardwood', 4, 250000);
 let tree3 = new Tree('Mahogan', 'xlarge', 'hardwood', 9, 750000);
 console.log(tree1.tName);
 console.log(tree2.tName);
 console.log(tree3.tName);
 
 function Man(name, body, height, age, weight){
     this.mName = name;
     this.mBody = body;
     this.mHeight = height;
     this.mAge = age;
     this.mWeight = weight;
 }
 
 let man1 = new Man('John', 'muscular', 'medium', 19, 65);
 let man2 = new Man('Jimmy', 'atheletee', 'medium', 26, 63);
 let man3 = new Man('Joel', 'fat', 'medium', 20, 68);
 console.log(man1.mBody);
 console.log(man1.mBody);
 console.log(man1.mBody);
 
 
 function Song(name, type, artist, year, time){
     this.songName = name;
     this.songType = type;
     this.songArtist = artist;
     this.songYear = year;
     this.songTime = time;
 }
 let song1 = new Song('Doctor sues', 'trap', 'Ski Mask', 2018, 'three minutes');
 let song2 = new Song('Switch', 'RnB', '6lack', 2021, 'two minutes');
 let song3 = new Song('One love', 'Reggae', 'Bob Marley', 1984, 'two minutes');
 console.log(song2.songArtist);
 console.log(song1);
 console.log(song3);
 
 
 function Movie(name, type, actors, year, time){
     this.movieName = name;
     this.movieType = type;
     this.movieActors = actors;
     this.movieYear = year;
     this.movieTime = time;
 }
 let movie1 = new Movie('Venom', 'Scifi', '24', 2019, 'one hour');
 let movie2 = new Movie('Prey', 'Horror', '30', 2022, 'two hours');
 let movie3 = new Movie('Cop shop', 'Thriller', '12', 2021, 'two hours');
 console.log(movie1.movieActors);
 console.log(movie2);
 console.log(movie3);
 
 function Game(name, type, levels, year, ratings){
     this.gName = name;
     this.gType = type;
     this.gLevels = levels;
     this.gYear = year;
     this.gRatings = ratings;
 }
 let game1 = new Game('Mortal Kombat', 'Fighting', 'Unknown', 2018, 10);
 let game2 = new Game('GTA V', 'Action', 'Unknown', 2019, 8);
 console.log(game2.gName);
 console.log(game3);
 console.log(game1);
 
 function Phone(name, type, version, year, price){
     this.phoneName = name;
     this.phoneType = type;
     this.phoneVersion = version;
     this.phoneYear = year;
     this.phonePrice = price;
 }
 let phone1 = new Phone('Samsung A10', 'Android', 11, 2020, '300000');
 let phone2 = new Phone('Redmi', 'Android', '9', 2017, '250000');
 let phone3 = new Phone('Samsung s22', 'Android', 13, 2021, '3200000');
 console.log(phone3);
 console.log(phone2);
 console.log(phone1);