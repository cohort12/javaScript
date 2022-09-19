

//Define seven classes with atleast 5 parameters using the <this> keyword and with atleast  3 instances using the <new> keyword.

function Sneaker(name, color, size, label, price){
    this.Sname = name;
    this.Scolor = color;
    this.Ssize = size;
    this.Slabel = label;
    this.Sprice = price;
 }
 let sneaker1 = new Sneaker('Sports', 'black', 45, 'Nike', 120000);
 let sneaker2 = new Sneaker('Fashion', 'lightblue', 43, 'Jordan', 150000);
 console.log(sneaker1);
 console.log(sneaker2);
 
 
 function Tree(name, size, type, age, price){
     this.Tname = name;
     this.Tsize = size;
     this.Ttype = type;
     this.Tage = age;
     this.Tprice = price;
 }
 
 let tree1 = new Tree('Pine', 'big', 'softwood', 2 , 100000);
 let tree2 = new Tree('Eucalyptus', 'big', 'hardwood', 4, 250000);
 console.log(tree1.Tname);
 
 function Man(name, body, height, age, weight){
     this.Mname = name;
     this.Mbody = body;
     this.Mheight = height;
     this.Mage = age;
     this.Mweight = weight;
 }
 
 let man1 = new Man('John', 'muscular', 'medium', 19, 65);
 let man2 = new Man('Jimmy', 'atheletee', 'medium', 26, 63);
 console.log(man1.Mbody);
 
 
 function Song(name, type, artist, year, time){
     this.songName = name;
     this.songType = type;
     this.songArtist = artist;
     this.songYear = year;
     this.songTime = time;
 }
 let song1 = new Song('Doctor sues', 'trap', 'Ski Mask', 2018, 'three minutes');
 let song2 = new Song('Switch', 'RnB', '6lack', 2021, 'two minutes');
 console.log(song2.songArtist);
 console.log(song2);
 console.log(song1);
 
 
 function Movie(name, type, actors, year, time){
     this.songName = name;
     this.songType = type;
     this.songActors = actors;
     this.songYear = year;
     this.songTime = time;
 }
 let movie1 = new Movie('Venom', 'Scifi', '24', 2019, 'one hour');
 let movie2 = new Movie('Prey', 'Horror', '30', 2022, 'two hours');
 console.log(movie1.songActors);
 console.log(movie2);
 console.log(movie1);
 
 function Game(name, type, levels, year, ratings){
     this.GName = name;
     this.GType = type;
     this.Glevels = levels;
     this.GYear = year;
     this.Gratings = ratings;
 }
 let game1 = new Game('Mortal Kombat', 'Fighting', 'Unknown', 2018, 10);
 let game2 = new Game('GTA V', 'Action', 'Unknown', 2019, 8);
 console.log(game2.GName);
 console.log(game2);
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
 console.log(phone2);
 console.log(phone1);