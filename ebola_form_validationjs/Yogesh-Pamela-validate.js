const form = document.getElementById('regForm');
let txtinput = document.querySelectorAll('.form-control');
let tblsel = document.querySelectorAll('.form-check-input');
const select = document.getElementById('select');

const phone = document.querySelector("#phone");



form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


const checkInputs = () => {

	// for input fields
    for(var i = 0; i < txtinput.length; i++){
        if(txtinput[i].value === ""){
           txtinput[i].style.border = '4px solid red';
            txtinput[i].focus();
        }else{
            txtinput[i].style.border = '4px solid green';
            txtinput[i].focus();
        }
    }

    // for table
    for(var j = 0; j < tblsel.length; j++){

        if(tblsel[j].checked === true ){
            tblsel[j].style.border= '4px solid green';
            tblsel[j].focus();
        }else{
            tblsel[j].style.border= '4px solid red';
            tblsel[j].focus();
        }
    }

// phone field
	let regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
	if (phone.match(regex)) {
		email.focus();
		phone.style.border = "2px solid green";
		return true;
	} else {
		phone.style.border = "2px solid red";
		phone.focus();
	}
}
