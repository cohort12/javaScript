const fname = document.querySelector("#fullname");
const phone = document.querySelector("#phonenumber");
const email = document.querySelector("#email");
const id = document.querySelector("#nationalid");
// const dob = document.querySelector("date");
// email.style.border = "2px solid blue";

// ================================================= VALIDATE PATIENT NAME ===================================================
const checkName = () => {
	let f_name = fname.value.trim();

	// full name regexp
	let alphabet = /^[a-zA-Z]+ [a-zA-Z]+$/;

	// if (f_name === "") {
	// 	fname.style.border = "1px solid #dc3545";
	// 	fname.focus();
	// 	return false;
	// } else {
	// 	fname.style.border = "1px solid #198754";
	// 	document.querySelector("#date").focus();
	// }

	if (f_name.match(alphabet)) {
		document.querySelector("#date").focus();
		return true;
	} else {
		fname.style.border = "1px solid #dc3545";
		fname.focus();
	}
};

// =================================================== VALIDATE PHONE NUMBER ============================================
const checkPhone = () => {
	let phoneN = phone.value.trim();

	// phone number regexp
	// let format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	let format = /^\+?([0-6]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

	// if (phoneN === "") {
	// 	phone.style.border = "1px solid #dc3545";
	// 	phone.focus();
	// 	return false;
	// } else {
	// 	email.focus();
	// }

	if (phoneN.match(format)) {
		email.focus();
		phone.style.border = "1px solid #198754";
		return true;
	} else {
		phone.style.border = "1px solid #dc3545";
		phone.focus();
	}
};

// ================================================VALIDATE EMAIL ==========================================================
const checkEmail = () => {
	let emaiL = email.value.trim();
	// email regexp
	let emailreg = /^\S+@\S+\.\S+$/;

	// if (emaiL === "") {
	// 	email.style.border = "1px solid #dc3545";
	// 	email.focus();
	// 	return false;
	// } else {
	// 	email.style.border = "1px solid #198754";
	// 	id.focus();
	// }

	if (emaiL.match(emailreg)) {
		id.focus();
		return true;
	} else {
		email.style.border = "1px solid #dc3545";
		email.focus();
	}
};

// ================================================= VALIDATE NATIONAL ID ======================================================
const checkId = () => {
	// regexp for numbers and letters and length
	let idreg = /^([A-Z0-9]{14})+$/;

	let idValue = id.value.trim();

	// if (idValue === "") {
	// 	id.style.border = "1px solid #dc3545";
	// 	id.focus();
	// }

	if (idValue.match(idreg)) {
		id.style.border = "1px solid #198754";
		document.querySelector("#address").focus();
	} else {
		id.style.border = "1px solid #dc3545";
		id.focus();
	}
};

// ========================================== VALIDATE OTHER FIELDS FOR EMPTY FIELDS ========================================

//JavaScript for disabling form submissions if there are invalid fields
(function () {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	let forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();

// ============================= Refresh page ==============================================
const refreshPage = () => {
	window.location.reload();
};
