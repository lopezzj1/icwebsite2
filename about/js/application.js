/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict"

function onReady() {


	var personForm = document.getElementById('apply');
	personForm.addEventListener('submit', onSubmit);

	/*var submitApp = document.getElementById('submit');
	submitApp.addEventListener('click', confirmSubmit);*/
}


function onSubmit(evt){
	console.log("on submit");
	var valid = validateForm(this);

	if (!valid && evt.preventDefault){
		evt.preventDefault();
	}


	evt.returnValue = valid;
	return valid;
}

function validateForm(form) {
	console.log("validate form");
	var requiredFields = ['firstName', 'lastName', 'email', 'schoolYear', 'skillsAns']
	var index;
	var valid = true;

	
	for (index = 0; index < requiredFields.length; index++) {
		valid &= validateRequiredFields(requiredFields[index], form);
	}


	return valid;
}


function validateRequiredFields(field, form) {
	console.log("validate required fields");
	if (0 == form[field].value.trim().length){
		form[field].style.borderColor = "red";
		console.log(form[field]);
		//form[field].className = 'form-control invalid-field';
		return false;
	} else {
		form[field].style.borderColor = "gray";
		return true;
	}
}


function confirmSubmit() {

	var con = confirm("Thank you for applying!");

	if (con == true){
		location.replace("./studentemployment.html");
	}
}


document.addEventListener('DOMContentLoaded', onReady);
