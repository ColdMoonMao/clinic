angular.module('app.controllers').controller('RegisterCtrl', ['$scope', '$state', '$ionicLoading', 'RegisterServe', '$ionicPopup', function($scope, $state, $ionicLoading, RegisterServe, $ionicPopup) {
	//scope变量声明
	$scope.regObj = {
		username: '', //string	y	用户名,
		password: '', //string	y	密码,
		sms_code: '', //string	y	短信验证码,
		invitation_code: '' //string	y	邀请码
	};
	$scope.isChecked = true;
	//scope函数声明
	//注册协议同意按钮
	$scope.onCheck = function() {
			$scope.isChecked = !$scope.isChecked;
			console.log($scope.isChecked);
		}
		//注册函数
	$scope.onRegister = function() {
			if ($scope.isChecked) {
				console.log($scope.regObj);
				$ionicLoading.show(); //动画
				RegisterServe.register($scope.regObj)
					.then(function(data) {
						console.log(data, 'success');
						$ionicLoading.hide(); //动画
						//弹窗提示信息
						$ionicPopup.alert({
							title: '注册',
							template: data.data.error.message,
							okText: '确定'
						}).then(function(res) {
							// console.log(res);
						})
					}, function(er) {
						console.log(er, 'error');
						$ionicLoading.hide(); //动画
					})
			} else {
				//弹窗提示信息
				$ionicPopup.alert({
					title: '注册',
					template: '请同意注册协议',
					okText: '确定'
				}).then(function(res) {
					// console.log(res);
				})
			}

		}
		//获取验证码按钮函数
	$scope.onGetCode = function() {
		$ionicLoading.show(); //动画
		console.log($scope.regObj.username);
		RegisterServe.sms_code({ phone: $scope.regObj.username })
			.then(function(data) {
				console.log(data, 'success');
				// $scope.regObj.sms_code=;
				$ionicLoading.hide(); //动画
				//弹窗提示信息
				$ionicPopup.alert({
					title: '注册',
					template: data.data.error.message,
					okText: '确定'
				}).then(function(res) {
					console.log(res);
				})
			}, function(er) {
				console.log(er, 'er');
			})
	}
}])
