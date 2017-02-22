angular.module('app.controllers').controller('ClinicListCtrl', ['$scope','ClinicListServe',function($scope,ClinicListServe) {
	ClinicListServe.list({token:sessionStorage.getItem('token')})
		.then(function (data) {
			console.log(data,'success');
			$scope.clinicArr =data.data.result;
		},function (er) {
			console.log(er,'er');
		})
	
}])
