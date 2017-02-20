angular.module('app.controllers', []);
angular.module('app.controllers')

.controller('DashCtrl', ['$scope', function($scope) {

}])

// .controller('ChatsCtrl', ['$scope', 'Chats', function($scope, Chats) {
// 	// With the new view caching in Ionic, Controllers are only called
// 	// when they are recreated or on app start, instead of every page change.
// 	// To listen for when this page is active (for example, to refresh data),
// 	// listen for the $ionicView.enter event:
// 	//
// 	//$scope.$on('$ionicView.enter', function(e) {
// 	//});
//
// 	$scope.chats = Chats.all();
// 	$scope.remove = function(chat) {
// 		Chats.remove(chat);
// 	};
// }])
//
// .controller('ChatDetailCtrl', ['$scope', '$stateParams', 'Chats', function($scope, $stateParams, Chats) {
// 	$scope.chat = Chats.get($stateParams.chatId);
// }])
//
// .controller('AccountCtrl', ['$scope', function($scope) {
// 	$scope.settings = {
// 		enableFriends: true
// 	};
// }]);

/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('DoctorDetailsCtrl', ['$scope', function($scope) {
	$scope.doctor = {
		img: 'img/mike.png',
		name: '孙医生(工号007)',
		hospital: '爱尔诊所后宰门诊室',
		description: '口腔修复专业,擅长(贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,)'
	};
}])
/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('DoctorListCtrl', function($scope, $state) {
	$scope.doctorArr = [{
		img: 'img/mike.png',
		name: '孙医生(工号007)',
		hospital: '爱尔诊所后宰门诊室',
		description: '口腔修复专业,擅长(贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,)'
	}, {
		img: 'img/perry.png',
		name: '靳医生(工号005)',
		hospital: '爱尔诊所后宰门诊室',
		description: '口腔修复专业,擅长(贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,贴面,牙齿美白,)'
	}];

	$scope.toDoctorDetails = function($index) { //$index需要传给下个页面
		console.log('1');
		$state.go('tab.doctorDetails');

	}

})
/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('PersonalCenterCtrl', ['$scope', function($scope) {}])

/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('PersonalInformationCtrl', ['$scope', function($scope) {}])
