angular.module('app.controllers')
.controller('LoginCtrl', ['$scope', '$state','$ionicLoading', 'LoginServe', function($scope, $state,$ionicLoading, LoginServe) {
	//scope对象声明
	$scope.loginObj = {
		username: '', //string	y	用户名,
		password: '', //string	y	密码,
	};
	//scope函数声明
	//登录函数
	$scope.onLogin = function() {
		$ionicLoading.show();//动画
		LoginServe.login($scope.loginObj)
			.then(function(data) {
				console.log(data, 'success');
				sessionStorage.setItem('token', data.data.result.token);
				sessionStorage.setItem('userId', data.data.result.id);
				$state.go('tab.home');
				$ionicLoading.hide();//动画
			}, function(er) {
				console.log(er, 'error');
			})
	}
	//忘记密码函数
	$scope.onForgotPW = function() {
		console.log(1);
		$state.go('forgetPassword');
	}
	//注册函数
	$scope.onRegister = function() {
		console.log(1);
		$state.go('register');
	}
}])
