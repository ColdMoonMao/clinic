angular.module('app.controllers', []);
/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('AddManCtrl', ['$scope','$state', function($scope,$state) {
    $scope.onAddManButtonClick=function () {
      
    }
  }])

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
angular.module('app.controllers').controller('ForgetPasswordCtrl', ['$scope', '$state', function($scope, $state) {

}])
/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.controllers').controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.onLogin = function() {
		$state.go('tab.dash');
	}
	$scope.onForgotPW = function() {
		console.log(1);
		$state.go('forgetPassword');
	}
	$scope.onRegister = function() {
		console.log(1);
		$state.go('register');
	}
}])
/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('HouseholdContactsCtrl', ['$scope','Contacts','$state', function($scope,Contacts,$state) {

    $scope.peopleArr=Contacts.all();

    console.log($scope.peopleArr)
    $scope.onAddButtonClick=function () {
      $state.go('tab.addMan')
    }
  }])

/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
  .controller('PersonalCenterCtrl', ['$scope','$state', function($scope,$state) {

  }])

/**
 * Created by liudong on 17-2-18.
 */
angular.module('app.controllers')
<<<<<<< HEAD
  .controller('PersonalInformationCtrl', ['$scope', function($scope) {}])

angular.module('app.controllers').controller('RegisterCtrl', ['$scope', '$state', function($scope, $state) {

}])
=======
  .controller('PersonalInformationCtrl', ['$scope', function($scope) {
    $scope.onSaveButtonClick=function () {
      
    }
  }])
>>>>>>> 5d2060d81bf42b0448d50c97d2fe73a79dccac91
