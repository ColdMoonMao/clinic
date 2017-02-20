// Ionic app App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'app.services' is found in services.js
// 'app.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services', 'app.directives', 'app.filters'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  //设置设备样式
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');


  //center:标题居中，left:标题居左，right:标题居右
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  //设置返回按钮属性
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  //设置设备控件
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
		.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	// Each tab has its own nav history stack:

	.state('tab.dash', {
		url: '/dash',
		views: {
			'tab-dash': {
				templateUrl: 'templates/tab-dash.html',
				controller: 'DashCtrl'
			}
		}
	})

	//医生列表
	.state('tab.doctorList', {
		url: '/dash/doctor-list',
		views: {
			'tab-dash': {
				templateUrl: 'templates/doctor-list.html',
				controller: 'DoctorListCtrl'
			}
		}
	})

	//医生详情
	.state('tab.doctorDetails', {
		url: '/dash/doctor-list/doctor-details',
		views: {
			'tab-dash': {
				templateUrl: 'templates/doctor-details.html',
				controller: 'DoctorDetailsCtrl'
			}
		}
	})

	.state('tab.chats', {
			url: '/chats',
			views: {
				'tab-chats': {
					templateUrl: 'templates/tab-chats.html',
					// controller: 'ChatsCtrl'
				}
			}
		})
		.state('tab.chat-detail', {
			url: '/chats/:chatId',
			views: {
				'tab-chats': {
					templateUrl: 'templates/chat-detail.html',
					controller: 'ChatDetailCtrl'
				}
			}
		})
   //个人中心
  .state('tab.personalCenter', {
    url: '/personal-center',
    views: {
      'tab-personal-center': {
        templateUrl: 'templates/personal-center.html',
        controller: 'PersonalCenterCtrl'
      }
    }
  })
    //个人信息
    .state('tab.personalInformation', {
      url: '/personal-center/personal-information',
      views: {
        'tab-personal-center': {
          templateUrl: 'templates/personal-information.html',
          controller: 'PersonalInformationCtrl'
        }
      }
    })
    //家庭联系人
    .state('tab.householdContacts', {
      url: '/personal-center/household-contacts',
      views: {
        'tab-personal-center': {
          templateUrl: 'templates/household-contacts.html',
          controller: 'HouseholdContactsCtrl'
        }
      }
    });


	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/dash');

});
