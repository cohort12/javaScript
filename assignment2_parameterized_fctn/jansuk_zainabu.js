//argument is a string
function babyName(bName) {
    return bName;
}
//arguments are integers
function weightAge(bWeight, bAge) {
    return babyName('Mercy') + ' is having a weight of ' + bWeight + ' and she is ' + bAge + ' years old';
}
//argument is a string
function babyMood(bMood) {
    return weightAge(18, 5) + ' , she is also ' + bMood;
}

//result to the console
console.log(babyMood('happy'));