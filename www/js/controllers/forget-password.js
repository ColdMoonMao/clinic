angular.module('app.controllers').controller('ForgetPasswordCtrl', ['$scope', '$state', 'ChangePasswordServe', function($scope, $state, ChangePasswordServe) {
	//scope变量定义
	$scope.changePasswordObj = {
		username: '', //string	y	用户名
		password: '', //string	y	密码
		sms_code: '' //string	y	短信验证码
	}

	//scope函数
	//重置按钮函数
	$scope.onRest = function() {
		ChangePasswordServe.changePassword($scope.changePasswordObj)
			.then(function(data) {
				console.log(data, 'success');
			}, function(er) {
				console.log(er, 'er');
			})
	}
	//获取验证码按钮函数
	$scope.onGetCode = function() {
		console.log($scope.changePasswordObj.username);
		ChangePasswordServe.sms_code({ phone: $scope.changePasswordObj.username })
			.then(function(data) {
				console.log(data, 'success');
				// $scope.changePasswordObj.sms_code=;
			}, function(er) {
				console.log(er, 'er');
			})
	}

}])
