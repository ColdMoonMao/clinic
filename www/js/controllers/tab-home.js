angular.module('app.controllers')

.controller('HomeCtrl', ['$scope', 'HomeServe', '$ionicLoading', function($scope, HomeServe, $ionicLoading) {
	//scope变量声明
	$scope.recommendDoctorArr = [];
	//本controller函数
	//获取推荐医生
	$ionicLoading.show(); //动画
	HomeServe.getRecommend({ token: sessionStorage.getItem('token') })
		.then(function(data) {
			console.log(data, 'getRecommend succes');
			$ionicLoading.hide(); //动画
			$scope.recommendDoctorArr = data.data.result;
		}, function(er) {
			console.log(er, 'getRecommend er');
		});
	//scope函数
}])
