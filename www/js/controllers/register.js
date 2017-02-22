angular.module('app.controllers').controller('RegisterCtrl', ['$scope', '$state','RegisterServe', function($scope, $state,RegisterServe) {
	$scope.regObj = {
		username: '', //string	y	用户名,
		password: '', //string	y	密码,
		sms_code: '', //string	y	短信验证码,
		invitation_code:'' //string	y	邀请码
	};
	$scope.onRegister=function () {
		RegisterServe.register($scope.regObj)
			.then(function (data) {
				console.log(data,'success');
			},function (er) {
				console.log(er,'error');
			})
	}
}])
