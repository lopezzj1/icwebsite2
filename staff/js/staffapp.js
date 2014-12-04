/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

"use strict";

angular.module('StaffApp', [])
	.controller('StaffController', function($scope){
		//initialize employees and order
		$scope.staff = icStaff;
		$scope.order = 'department';

		$scope.sortBy = function(sort) {
			return $scope.order == sort;
		};

		$scope.isSortedBy = function (sorted){
			if (sorted == 'lastName') {
				return "last name";
			} else if (sorted == 'firstName'){
				return "first name"
			} else {
				return "department"
			}
		};
});
