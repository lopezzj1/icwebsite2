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
		//$scope.staff = icStaff;
		$scope.admin = adminStaff;
		$scope.biology = bioStaff;
		$scope.chemistry = chemStaff;
		$scope.math = mathStaff;
		$scope.physEngin = physEngineStaff;
		$scope.psychology = psychStaff;
		$scope.sociology = socStaff;
		$scope.writing = writeStaff;


		$scope.order = 'department';

		$scope.sortBy = function(sort) {
			return $scope.order == sort;
		};

		if ($scope.order == 'department'){

		}

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
