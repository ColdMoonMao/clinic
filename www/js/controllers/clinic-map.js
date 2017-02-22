angular.module('app.controllers')
	.controller('ClinicMapCtrl', ['$scope', '$rootScope', '$stateParams', function($scope, $rootScope, $stateParams) {
		// $scope.clinic = Chats.get($stateParams.clinicId);
		console.log($stateParams.clinicId, 'clinicid');
		console.log($rootScope.clinicMapParams, '$rootScope.clinicMapParams');

		var map = new AMap.Map('container', {
			resizeEnable: true,
			zoom: 12,
			center: [$rootScope.clinicMapParams.longitude, $rootScope.clinicMapParams.latitude]
		});
		var marker = new AMap.Marker({
			position: [$rootScope.clinicMapParams.longitude, $rootScope.clinicMapParams.latitude]
		});
		marker.setMap(map);
		marker.on('click', function(e) {
			infowindow.open(map, e.target.getPosition());
		})
		AMap.plugin('AMap.AdvancedInfoWindow', function() {
			infowindow = new AMap.AdvancedInfoWindow({
				content: '<div class="info-title">' + $rootScope.clinicMapParams.name + '</div><div class="info-content">' +
					'<p>' + $rootScope.clinicMapParams.address + '</p></div>',
				offset: new AMap.Pixel(0, -30)
			});
			infowindow.open(map, [$rootScope.clinicMapParams.longitude, $rootScope.clinicMapParams.latitude]);
		})
		AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
			var toolBar = new AMap.ToolBar();
			var scale = new AMap.Scale();
			map.addControl(toolBar);
			map.addControl(scale);
		})

	}])
