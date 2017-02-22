angular.module('app.controllers').controller('LoginCtrl', ['$scope', '$state','LoginServe', function($scope, $state,LoginServe) {
	$scope.loginObj = {
		username: '', //string	y	用户名,
		password: '', //string	y	密码,
	};
	$scope.onLogin = function() {
		LoginServe.login($scope.loginObj)
			.then(function(data) {
				console.log(data, 'success');
				sessionStorage.setItem('token', data.data.result.token);
				sessionStorage.setItem('userId', data.data.result.id);
				$state.go('tab.home');
			}, function(er) {
				console.log(er, 'error');
			})
	}
	$scope.onForgotPW = function() {
		console.log(1);
		$state.go('forgetPassword');
	}
	$scope.onRegister = function() {
		console.log(1);
		$state.go('register');
	}
}])
