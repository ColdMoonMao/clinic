angular.module('app.controllers')
	.controller('ClinicDetailCtrl', ['$scope', '$rootScope', '$stateParams', 'ClinicDetailServe', function($scope, $rootScope, $stateParams, ClinicDetailServe) {
		// $scope.clinic = Chats.get($stateParams.clinicId);
		console.log($stateParams.clinicId);
		var clinicParams = {
			token: sessionStorage.getItem('token'),
			hospital_id: $stateParams.clinicId
		}
		ClinicDetailServe.detail(clinicParams)
			.then(function(data) {
				console.log(data, 'success');
				$scope.clinicDetailObj = data.data.result;
				$rootScope.clinicMapParams = {
					longitude: $scope.clinicDetailObj.longitude,
					latitude: $scope.clinicDetailObj.latitude,
					name: $scope.clinicDetailObj.name,
					address: $scope.clinicDetailObj.address
				}
			}, function(er) {
				console.log(er, 'er');
			})
	}])
