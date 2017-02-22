angular.module('app.controllers')

.controller('HomeCtrl', ['$scope','HomeServe', function($scope,HomeServe) {
	//上传文件
	HomeServe.getRecommend({token:sessionStorage.getItem('token')})
		.then(function(data) {
			console.log(data, 'getRecommend succes');
			$scope.recommendDoctorArr=data.data.result;
		}, function(er) {
			console.log(er, 'getRecommend er');
		});
}])
