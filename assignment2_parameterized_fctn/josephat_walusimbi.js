function savings(){
    let salary = 500000;
    let sideHustle = 300000;
    let expenses = 400000;
    let savings = (salary + sideHustle) - expenses;
return savings;
}

function investment(){
    investment = savings() * 0.2
    return investment;
}

function investInBonds(){
  let investInBonds = investment() * 0.4
  console.log(investInBonds);

}
investInBonds();