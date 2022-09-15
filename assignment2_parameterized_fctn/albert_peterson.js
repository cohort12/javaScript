// Albert Ashaba Aheebwa
// Peterson Batatwenda

function netPay(gross, tax, nssf) {
	var netPay_ = gross - gross * tax - gross * nssf;
	return netPay_;
}

function takeHome(gross, tax, nssf) {
	var welfare = 50000;
	var takeHome = netPay(gross, tax, nssf) - welfare;
	return takeHome;
}

function savings(gross, tax, nssf) {
	var rent = 200000;
	var internet = 50000;
	var food = 400000;
	var electricity = 60000;
	var total = rent + internet + food + electricity;
	var savings_ = takeHome(gross, tax, nssf) - total;
	console.log(savings_);
}

// console.log(netPay(2000000, 0.3, 0.05));
savings(2000000, 0.3, 0.05);
