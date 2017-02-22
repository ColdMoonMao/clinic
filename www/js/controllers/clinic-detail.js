angular.module('app.controllers')
.controller('ClinicDetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	// $scope.clinic = Chats.get($stateParams.clinicId);
	console.log($stateParams.clinicId);
	$scope.clinicDetailObj={
    "address": "后宰门130号创之星大厦一单元122（中户）",
    "phone": "87390008",
    "latitude": 34.2779,
    "name": "爱尔诊所后宰门诊室",
    "id": 1,
    "departments": [
      {
        "icon_url": "http://www.bigbug.tech:8080/hospital-appointment-api/resources/clinic_13_color_icon.png",
        "name": "口腔科",
        "description": null,
        "id": 1,
        "doctor_count": 6
      }
    ],
    "pic_url": "http://www.bigbug.tech:8080/hospital-appointment-api/resources/hospital_default.jpg",
    "doctor_count": 7,
    "specialities": [
      {
        "name": "修复科(镶牙)",
        "description": "固定义齿、活动义齿、全口义齿、牙齿美容、附着体义齿等治疗",
        "id": 2,
        "hospital_department_name": "口腔科",
        "doctor_count": 1
      },
      {
        "name": "正畸科(矫正)",
        "description": "青少年及成年人牙颌畸形矫治",
        "id": 3,
        "hospital_department_name": "口腔科",
        "doctor_count": 2
      },
      {
        "name": "综合科",
        "description": "不需转科，接诊医师根据据患者具体病情，一人完成患者所需要的补牙、镶牙、牙美容等全部口腔治疗",
        "id": 6,
        "hospital_department_name": "口腔科",
        "doctor_count": 1
      }
    ],
    "longitude": 108.956
  }
}])