angular.module('app.controllers')
	.controller('ClinicMapCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
		// $scope.clinic = Chats.get($stateParams.clinicId);
		console.log($stateParams.clinicId, 'clinicid');

		var map = new AMap.Map('container', {
			resizeEnable: true,
			zoom: 12,
			center: [108.956, 34.2779]
		});
		var marker = new AMap.Marker({
			position: [108.956, 34.2779]
		});
		marker.setMap(map);
		marker.on('click', function(e) {
			infowindow.open(map, e.target.getPosition());
		})
		AMap.plugin('AMap.AdvancedInfoWindow', function() {
			infowindow = new AMap.AdvancedInfoWindow({
				content: '<div class="info-title">爱尔诊所后宰门诊室</div><div class="info-content">' +
					'<p>后宰门130号创之星大厦一单元122（中户）</p></div>',
				offset: new AMap.Pixel(0, -30)
			});
			infowindow.open(map, [108.956, 34.2779]);
		})
		AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
			var toolBar = new AMap.ToolBar();
			var scale = new AMap.Scale();
			map.addControl(toolBar);
			map.addControl(scale);
		})
		console.log(map);

	}])
