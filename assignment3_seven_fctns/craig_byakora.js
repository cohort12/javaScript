//Class one 
function phone(type,name,specs,price,size){
    this.type= type;
    this.name=name;
    this.specs= specs;
    this.price=price;
    this.size=size;
  }
  let iphonex =new phone("Iphone","Iphone X","improved faceid",4000000,"143.6mm");
  let samsunga50= new phone("Samsung","a50","improved camera",2000000,"146.3inch");
  let nokiaflip = new phone("Nokia","Nokia flip","205 MSM8905 processor",270000,"2.8inch");
 
  //Class two
  function school(name,location,students,fees,facilities){
    this.name= name;
    this.location=location;
    this.students = students;
    this.fees =fees;
    this.facilities = facilities;
  }
 
 let kisu = new school("Kisu","Kyebando",1000,1000000,4);
 let Acorns= new school("Acorns","Kisasi",1500,8000000,3);
 let ISU = new school("international school uganda","Lubowa",20000000,6);
 
 //Class three
 
 function book(name,author,published,pages){
   this.name=name;
   this.author=author;
   this.published=published;
   this.pages=pages;
 }
  let book1= new book("Percy Jackson","Rick Riordan",2005,416 );
  let book2 = new book("Harry Potter","Jk.Rowling",1997,223);
  let book3 = new book("Maze Runner","James Dashner",2005,143);
 
  //class four 
  function shoes(name,brand,size,price){
   this.name=name;
   this.brand=brand;
   this.size=size;
   this.price=price;
  }
  let shoe1= new shoes("jordan11","jordan",41,150000);
  let shoe2 = new shoes("airforce1", "nike",45,200000);
  let shoe3 = new shoes("jordan 4","jordan",43,250000);
 
 
 
 //class five 
 
 function cars(name,model,type,released){
   this.name=name;
   this.model=model;
   this.type=type;
   this.released=released;
 }
  let car1= new cars("Nissan","Altima","Coupe",1993);
  let car2= new cars("Range Rover","Evoque","SUV",2011);
 
  //Class six
  function game(type,name,releaseyr,size){
   this.type=type;
   this.name=name;
   this.releaseyr=releaseyr;
   this.size=size;
  }
   let Fifa23 = new game("Sports","Fifa23",2022,"100Gb");
   let Fortnite = new game("Action","Fortnite",2017,"28.9gb");
 
 
   //class seven
   function song(name,artist,album,releaseyr){
     this.name=name;
     this.artist=artist;
     this.album=album;
     this.releaseyr=releaseyr;
   }
  let song1= new song("Hotline Bling","Drake","Views",2015);
  let song2= new song("Stressed out","Twenty one Pilots","Blurryface",2015);