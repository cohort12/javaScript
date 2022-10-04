const doc = document;
const form = doc.querySelector('#form');

// Text DOM elements
const personel = doc.querySelector('#personel');
const placeOfAssessment = doc.querySelector('#place_of_assessement');
const fName = doc.querySelector('#fName');
const lName = doc.querySelector('#lName');
const residence = doc.querySelector('#residence');
const permanentAddress = doc.querySelector('#permanentAddress');
const mail = doc.querySelector('#email');
const occupation = doc.querySelector('#occupation');
const person1fName = doc.querySelector('#person1fName');
const person2fName = doc.querySelector('#person2fName');
const person3fName = doc.querySelector('#person3fName');
const person4fName = doc.querySelector('#person4fName');
const person5fName = doc.querySelector('#person5fName');

const person1lName = doc.querySelector('#person1lName');
const person2lName = doc.querySelector('#person2lName');
const person3lName = doc.querySelector('#person3lName');
const person4lName = doc.querySelector('#person4lName');
const person5lName = doc.querySelector('#person5lName');

// Date and Number Dom elements
const personelNumber = doc.querySelector('#personelNumber');
const date_of_assess = doc.querySelector('#date_of_assessment');
const dob = doc.querySelector('#dob');
const age = doc.querySelector('#age');
const nationalism = doc.querySelector('#nationalism');
const patientPhone = doc.querySelector('#patientPhone');
const person1Phone = doc.querySelector('#person1Phone');
const person2Phone = doc.querySelector('#person2Phone');
const person3Phone = doc.querySelector('#person3Phone');
const person4Phone = doc.querySelector('#person4Phone');
const person5Phone = doc.querySelector('#person5Phone');

// Reg Expressions
const regString = /^[A-Za-z.\s_-]+$/;
const regDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;//mm/dd/yyyy
const regPhone = /^[0-9]{10}$/;
const regAge = /^[0-9]{2}$/;
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkStringInputs = (val) => {
    if(val.value !== '' || val.value.match(regString)) {
        val.style.border = '2px solid green';
        return true;
    } else {
        val.style.border = '2px solid red';
        return false;
    }
}

const checkPhoneInputs = (val) => {
    if(val.value !== '' || val.value.match(regPhone)) {
        val.style.border = '2px solid green';
        return true;
    } else {
        val.style.border = '2px solid red';
        return false;
    }
}

const checkDateFormat = (val) => {
    if(val.value !== '' || val.value.match(regDate)) {
        val.style.border = '2px solid green';
        return true;
    } else {
        val.style.border = '2px solid red';
        return false;
    }
}

const checkMail = (val) => {
    if(val.value !== '' || mail.value.match(regEmail)) {
        val.style.border = '2px solid green';
        return true;
    } else {
        val.style.border = '2px solid red';
        return false;
    }
}


const validateForm = () => {
    checkStringInputs(personel);
    checkStringInputs(placeOfAssessment);
    checkStringInputs(fName);
    checkStringInputs(lName);
    checkStringInputs(residence);
    checkStringInputs(nationalism);
    checkStringInputs(permanentAddress);
    checkStringInputs(occupation);
    checkStringInputs(person1fName);
    checkStringInputs(person2fName);
    checkStringInputs(person3fName);
    checkStringInputs(person4fName);
    checkStringInputs(person5fName);
    checkStringInputs(person1lName);
    checkStringInputs(person2lName);
    checkStringInputs(person3lName);
    checkStringInputs(person4lName);
    checkStringInputs(person5lName);

    //Dates
    checkDateFormat(date_of_assess);
    checkDateFormat(dob);

    //phone
    checkPhoneInputs(personelNumber);
    checkPhoneInputs(patientPhone);
    checkPhoneInputs(person1Phone);
    checkPhoneInputs(person2Phone);
    checkPhoneInputs(person3Phone);
    checkPhoneInputs(person4Phone);
    checkPhoneInputs(person5Phone);
    checkMail(mail);

    //age two digits
    if(age.value !== '' || age.value.match(regAge)) {
        age.style.border = '2px solid green';
        return true;
    } else {
        age.style.border = '2px solid red';
        return false;
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateForm();
})