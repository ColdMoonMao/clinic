/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.onLogin = function() {
		$state.go('tab.home');
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