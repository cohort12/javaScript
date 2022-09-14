//ASSIGNMENT: Create 3 parameterized functions that call one another so that b calls a and c call b.


//function to work out age given the date of birth
function staffAge(yearOfBirth) {
    let yearToday = 2022;
    let hisHerAge = yearToday - yearOfBirth;
    return hisHerAge;
}

console.log(staffAge(1978));

//The function below calls the function staffAge() above
function twentyYearsLater(firstName, lastName) {
    let fullName = firstName + lastName;
    let ageInTwentYrs = staffAge(1978) + 20;
    return "In 20 years, " + fullName + " will be " + ageInTwentYrs + " years old."
}

console.log(twentyYearsLater("John", " Wicks"));

//The function below calls the function twentyYearsLater() above
function pensionAble(nationalIdNumber) {
    let nin = nationalIdNumber;
    let pensionYrs = 75;
    let pentionStatus;
    if (twentyYearsLater() >= pensionYrs) {
        pentionStatus = "Citizen number: " + nin + " will already be eating pension"
    } else {
        pentionStatus = "Aaaagh! " + "Citizen number: " + nin + " will still be an active citizen";
    }
    return pentionStatus;
}

console.log(pensionAble("CM72092309JNPD"));