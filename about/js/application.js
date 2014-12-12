/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict"

function onReady() {
	var element = document.getElementById("state");
	var name = document.createElement("name");

	var submitApp = document.getElementById('submit');
	submitApp.addEventListener('click', confirmSubmit);

	var personForm = document.getElementById('signup');
	personForm.addEventListener('submit', onSubmit);
}


function onSubmit(evt){
	var valid = validateForm(this);



	if (!valid && evt.preventDefault){
		evt.preventDefault();
	}


	evt.returnValue = valid;
	return valid;
}

function validateForm(form) {
	var requiredFields = ['firstName', 'lastName', 'email', 'schoolYear', 'skillsAns']
	var index;
	var valid = true;

	
	for (index = 0; index < requiredFields.length; index++) {
		valid &= validateRequiredFields(requiredFields[index], form);
	}


	return valid;
}


function validateRequiredFields(field, form) {

	if (0 == form[field].value.trim().length){
		form[field].style.borderColor = "red";
		return false;
	} else {
		form[field].className = 'form-control';
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
