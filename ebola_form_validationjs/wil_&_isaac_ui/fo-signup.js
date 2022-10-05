const surName = document.fosignup.fosurname;
const lastName = document.fosignup.folname;
const dob = document.fosignup.dob;
const admissDate = document.fosignup.doadmiss;
const etuNum = document.fosignup.etunumber;
const age = document.fosignup.age;
const epiId = document.fosignup.epiid;
const chkbxHlth = document.fosignup.healthworker;
const chkbxNonhlth = document.fosignup.nonhealth;
const occupSpecity = document.fosignup.occupation;
const refFacility = document.fosignup.refacility;
const heartRate = document.fosignup.heartrate;
const bpSystolic = document.fosignup.bpsystolic;
const bpDiastolic = document.fosignup.bpdiastolic;
const respRate = document.fosignup.resprate;
const oxySat = document.fosignup.oxysat;
const weight = document.fosignup.weight;
const height = document.fosignup.height;
const paTemp = document.fosignup.temp;
const midUpArm = document.fosignup.miduparm;

const checksurName = () => {
    if (surName.value == "") {
        surName.style.border = "1px solid red";
        alert("Please enter patient's first name.")
    } else {
        surName.style.border = "3px solid green";
    }
}

const checklastName = () => {
    if (lastName.value == "") {
        lastName.style.border = "1px solid red";
        alert("Please enter patient's last name.")
    } else {
        lastName.style.border = "3px solid green";
    }
}

const checkDate = () => {
        if (dob.value == "" && age.value === "") {
            dob.style.border = "1px solid red";
            age.style.border = "1px solid red";
            alert("Please specify Date of Birth or Age of patient");
        } else {
            dob.style.border = "3px solid green";
            age.style.border = "3px solid green";

        }

}

const checkEtuNum = () => {
    if (etuNum.value == "") {
        etuNum.style.border = "1px solid red";
        alert('Please enter the ETU Number.')
    } else {
        etuNum.style.border = "3px solid green";
    }
}

const checkEpiId = () => {
    if (epiId.value == "") {
        epiId.style.border = "1px solid red";
        alert('Please enter the EPI ID.')
    } else {
        epiId.style.border = "3px solid green";
    }
}

const checkAdmissionDate = () => {
    if (admissDate.value == "" && age.value === "") {
        admissDate.style.border = "1px solid red";
        alert("Please specify Date of Admission");
    } else {
        admissDate.style.border = "3px solid green";
    }

}

const checkOccupation = () => {
    if (occupSpecity.value == "") {
        occupSpecity.style.border = "1px solid red";
        alert("Please select occupation and specify work");
    } else {
        occupSpecity.style.border = "3px solid green";
    }
}

const checkFacility = () => {
    if (refFacility.value == "") {
        refFacility.style.border = "1px solid red";
        alert("Please type NA in Name of facility box if it doesn't apply.");
    } else {
        refFacility.style.border = "3px solid green";

    }
}

const checkHeartRate = () => {
    if (heartRate.value == "") {
        heartRate.style.border = "1px solid red";
        alert("Please enter the patient's heartrate.");
    } else {
        heartRate.style.border = "3px solid green";
    }
}

const checkPressureSys = () => {
    if (bpSystolic.value == "") {
        bpSystolic.style.border = "1px solid red";
        alert("Please enter the patient's complete pressure detail.");
    } else {
        bpSystolic.style.border = "3px solid green";
    }
}

const checkPressureDys = () => {
    if (bpDiastolic.value == "") {
        bpDiastolic.style.border = "1px solid red";
        alert("Please enter the patient's complete pressure detail.");
    } else {
        bpDiastolic.style.border = "3px solid green";
    }
}

const checkRespRate = () => {
    if (respRate.value == "") {
        respRate.style.border = "1px solid red";
        alert("Please enter the patient's Respiratory Rate.");
    } else {
        respRate.style.border = "3px solid green";
    }
}

const checkOxySat = () => {
    if (oxySat.value == "") {
        oxySat.style.border = "1px solid red";
        alert("Please enter the Oxygen Saturation.");
    } else {
        oxySat.style.border = "3px solid green";
    }
}

const checkWeight = () => {
    if (weight.value == "") {
        weight.style.border = "1px solid red";
        alert("Please enter the patient's weight.");
    } else {
        weight.style.border = "3px solid green";
    }
}

const checkHeight= () => {
    if (height.value == "") {
        height.style.border = "1px solid red";
        alert("Please enter the patient's height.");
    } else {
        height.style.border = "3px solid green";
    }
}

const checkTemp= () => {
    if (paTemp.value == "") {
        paTemp.style.border = "1px solid red";
        alert("Please enter the patient's temperature.");
    } else {
        paTemp.style.border = "3px solid green";
    }
}

const checkArmp = () => {
    if (midUpArm.value == "") {
        midUpArm.style.border = "1px solid red";
        alert("Please enter the patient's MUAC.");
    } else {
        midUpArm.style.border = "3px solid green";
    }
}