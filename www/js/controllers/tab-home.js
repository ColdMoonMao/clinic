angular.module('app.controllers')

.controller('HomeCtrl', ['$scope','HomeServe', function($scope,HomeServe) {
	//上传文件
	HomeServe.getRecommend({})
		.then(function(data) {
			console.log(data, 'getRecommend');
		}, function(er) {
			console.log(er, 'getRecommend er');
		});


	$scope.recommendDoctorArr = [{
		"introducation": "20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验", //简介
		"hospital_department_name": "齿科", //科室
		"name": "李思", //姓名
		"id": 2, //id
		"job_title": "主任医师", //职称
		"hospital_name": "爱尔眼科医院" //医院
	}, {
		"introducation": "20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验", //简介
		"hospital_department_name": "齿科", //科室
		"name": "李思", //姓名
		"id": 2, //id
		"job_title": "主任医师", //职称
		"hospital_name": "爱尔眼科医院" //医院
	}, {
		"introducation": "20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验", //简介
		"hospital_department_name": "齿科", //科室
		"name": "李思", //姓名
		"id": 2, //id
		"job_title": "主任医师", //职称
		"hospital_name": "爱尔眼科医院" //医院
	}, {
		"introducation": "20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验", //简介
		"hospital_department_name": "齿科", //科室
		"name": "李思", //姓名
		"id": 2, //id
		"job_title": "主任医师", //职称
		"hospital_name": "爱尔眼科医院" //医院
	}, {
		"introducation": "20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验", //简介
		"hospital_department_name": "齿科", //科室
		"name": "李思", //姓名
		"id": 2, //id
		"job_title": "主任医师", //职称
		"hospital_name": "爱尔眼科医院" //医院
	}, {
		"introducation": "20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验20年齿科临床经验", //简介
		"hospital_department_name": "齿科", //科室
		"name": "李思", //姓名
		"id": 2, //id
		"job_title": "主任医师", //职称
		"hospital_name": "爱尔眼科医院" //医院
	}]
}])
