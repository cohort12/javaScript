function sum(a , b ){
  var c = b - a;
  // var c = 10;
  console.log (c);
  
  }

  sum(30, 90);
  sum (500, 900);


function showCount(count) {
    console.log(count ?? "unknown");
  }
  
  showCount(0); 
  showCount(null); 
  showCount(); 

  function checkAge(age) {
    if (age >= 28) {
      return true;
    }
  }
  
  if ( checkAge(21) ) {
    console.log( 'Yes lets date' );
  } else {
    console.log( 'No am under age' );
  }
  checkAge();