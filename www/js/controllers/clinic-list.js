angular.module('app.controllers').controller('ClinicListCtrl', ['$scope', 'ClinicListServe', '$ionicLoading', function($scope, ClinicListServe, $ionicLoading) {
	//scope变量声明
	$scope.clinicArr = [];
	//本controller函数
	//获取推荐医生
	$ionicLoading.show(); //动画
	ClinicListServe.list({ token: sessionStorage.getItem('token') })
		.then(function(data) {
			console.log(data, 'success');
			$ionicLoading.hide(); //动画
			$scope.clinicArr = data.data.result;
		}, function(er) {
			console.log(er, 'er');
		})
		//scope函数

}])
