angular.module('app.controllers').controller('ForgetPasswordCtrl', ['$scope', '$state', 'ChangePasswordServe', function($scope, $state, ChangePasswordServe) {
	$scope.changePasswordObj = {
		username: '', //string	y	用户名
		password: '', //string	y	密码
		sms_code: '' //string	y	短信验证码
	}
	$scope.onRest = function() {
		ChangePasswordServe.changePassword($scope.changePasswordObj)
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
	}

}])
