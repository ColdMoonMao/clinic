angular.module('app.controllers').controller('ClinicListCtrl', ['$scope',function($scope) {
	$scope.clinicArr = [{
		"address": "后宰门130号创之星大厦一单元122（中户）",
		"phone": null,
		"latitude": null,
		"name": "爱尔诊所后宰门店",
		"id": 1,
		"position": null,
		"departments": [{
			"name": "口腔科",
			"id": 1
		}],
		"pic_url": "http://www.bigbug.tech:8080/hospital-appointment-api/resources/hospital_default.jpg",
		"doctor_count": 6,
		"longitude": null
	}, {
		"address": "后宰门130号创之星大厦一单元122（中户）",
		"phone": null,
		"latitude": null,
		"name": "爱尔诊所伊顿店",
		"id": 2,
		"position": null,
		"departments": [{
			"name": "口腔科",
			"id": 1
		}],
		"pic_url": "http://www.bigbug.tech:8080/hospital-appointment-api/resources/hospital_default.jpg",
		"doctor_count": 2,
		"longitude": null
	}];
}])
