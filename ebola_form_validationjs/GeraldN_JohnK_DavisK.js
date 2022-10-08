const patientName = document.registration.patientname;
const etuNumber = document.registration.etunumber;
const dateOfBirth = document.registration.dateofbirth;
const dateOfAdmission = document.registration.dateofadmission;
const heartRate = document.registration.heartrate;
const respiratoryRate = document.registration.respiratoryrate;
const bloodPressure = document.registration.bloodpressure;
const temp = document.registration.temperature;
const firstSymptoms = document.registration.firstsymptoms;
const isolationUnit = document.registration.isolationunit;

// alphabet = /^[A-Za-z]+$/
// numbers = /^[0-9]+$/
// email adress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// date(dd/mm/yyy) = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/

// Validating the patient's name
const checkPName = () => {
    // Regular expression for alphabetical letters only
    let validateName1 = /^[A-Za-z]+$/

    // Checking when input field is empty and shows red border when empty
    if(patientName.value === ''){
        patientName.style.border = '4px solid red';
        patientName.focus()
    }

    // Checking whether value matches validateName1 regex and shows green border if it matches
    if(patientName.value.match(validateName1)){
        patientName.style.border = '4px solid green';
        etuNumber.focus()
    } else {
        patientName.style.border = '4px solid red';
        patientName.focus();
    }
};

const checkENumber = () => {
    let validateENumber1 = /^[0-9]+$/

    if(etuNumber.value === ''){
        etuNumber.style.border = '4px solid red';
        etuNumber.focus()
    }

    if(etuNumber.value.match(validateENumber1)){
        etuNumber.style.border = '4px solid green';
        dateOfBirth.focus();
    } else {
        etuNumber.style.border = '4px solid red';
        etuNumber.focus();
    }
};

const checkDOBirth = () => {
    let validateDOB = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/

    if(dateOfBirth.value === ''){
        dateOfBirth.style.border = '4px solid red';
        dateOfBirth.focus();
    }

    if(dateOfBirth.value.match(validateDOB)){
        dateOfBirth.style.border = '4px solid green';
        dateOfAdmission.focus();
    } else {
        dateOfBirth.style.border = '4px solid red';
        dateOfBirth.focus();
    }
};

const checkDOAdmission = () => {
    let validateDOA = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/

    if(dateOfAdmission.value === ''){
        dateOfAdmission.style.border = '4px solid red';
        dateOfAdmission.focus();
    }

    if(dateOfAdmission.value.match(validateDOA)){
        dateOfAdmission.style.border = '4px solid green';
        heartRate.focus();
    } else {
        dateOfAdmission.style.border = '4px solid red';
        dateOfAdmission.focus();
    }
};

const checkHRate = () => {
    let validateHRate = /^[0-9]+$/

    if(heartRate.value === ''){
        heartRate.style.border = '4px solid red';
        heartRate.focus();
    }

    if(heartRate.value.match(validateHRate)){
        heartRate.style.border = '4px solid green';
        respiratoryRate.focus();
    } else {
        heartRate.style.border = '4px solid red';
        heartRate.focus();
    }
};

const checkRRate = () => {
    let validateRRate = /^[0-9]+$/

    if(respiratoryRate.value === ''){
        respiratoryRate.style.border = '4px solid red';
        respiratoryRate.focus()
    }
    if(respiratoryRate.value.match(validateRRate)){
        respiratoryRate.style.border ='4px solid green';
        bloodPressure.focus()
    } else {
        respiratoryRate.style.border = '4px solid red';
        respiratoryRate.focus()
    }
};

const checkBPressure = () => {
    let validateBpressure = /^[0-9]+$/

    if(bloodPressure.value === ''){
        bloodPressure.style.border = '4px solid red';
        bloodPressure.focus();
    }

    if(bloodPressure.value.match(validateBpressure)){
        bloodPressure.style.border = '4px solid green';
        temp.focus();
    } else {
        bloodPressure.style.border = '4px solid red';
        bloodPressure.focus();
    }
};

const checkTemps = () => {
    let validateTemperatures = /^[0-9]+$/

    if(temp.value === ''){
        temp.style.border = '4px solid red';
        temp.focus();
    }

    if(temp.value.match(validateTemperatures)){
        temp.style.border = '4px solid green';
        firstSymptoms.focus();
    } else {
        temp.style.border = '4px solid red';
        temp.focus();
    }
};

const checkFirst = () => {
    let validateOnFirst = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/

    if(firstSymptoms.value === ''){
        firstSymptoms.style.border = '4px solid red';
        firstSymptoms.focus();
    }

    if(firstSymptoms.value.match(validateOnFirst)){
        firstSymptoms.style.border = '4px solid green';
        isolationUnit.focus();
    } else {
        firstSymptoms.style.border = '4px solid red';
        firstSymptoms.focus();
    }
};

const checkIUnit = () => {
    let validateIUnits = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/

    if(isolationUnit.value === ''){
        isolationUnit.style.border = '4px solid red';
        isolationUnit.focus();
    }

    if(isolationUnit.value.match(validateIUnits)){
        isolationUnit.style.border = '4px solid green';
        isolationUnit.focus();
    } else {
        isolationUnit.style.border = '4px solid red';
        isolationUnit.focus();
    }
};

