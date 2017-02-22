// Ionic app App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'app.services' is found in services.js
// 'app.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services', 'app.directives', 'app.filters'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

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
      //login
      .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'templates/login.html'
      })
      //register
      .state('register', {
        url: '/register',
        controller: 'RegisterCtrl',
        templateUrl: 'templates/register.html'
      })
      //forgetPassword
      .state('forgetPassword', {
        url: '/forgetPassword',
        controller: 'ForgetPasswordCtrl',
        templateUrl: 'templates/forget-password.html'
      })
      // Each tab has its own nav history stack:

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      //诊室列表
      .state('tab.clinicList', {
        url: '/home/clinic-list',
        views: {
          'tab-home': {
            templateUrl: 'templates/clinic-list.html',
            controller: 'ClinicListCtrl'
          }
        }
      })

      //诊室详情
      .state('tab.clinicDetail', {
        url: '/home/clinic/:clinicId',
        views: {
          'tab-home': {
            templateUrl: 'templates/clinic-detail.html',
            controller: 'ClinicDetailCtrl'
          }
        }
      })

      //诊室地图
      .state('tab.clinicMap', {
        url: '/home/clinic/:clinicId/map',
        views: {
          'tab-home': {
            templateUrl: 'templates/clinic-map.html',
            controller: 'ClinicMapCtrl'
          }
        }
      })

      //医生列表
      .state('tab.doctorList', {
        url: '/home/doctor-list',
        views: {
          'tab-home': {
            templateUrl: 'templates/doctor-list.html',
            controller: 'DoctorListCtrl'
          }
        }
      })

      //医生详情
      .state('tab.doctorDetails', {
        url: '/home/doctor-list/doctor-details',
        views: {
          'tab-home': {
            templateUrl: 'templates/doctor-details.html',
            controller: 'DoctorDetailsCtrl'
          }
        }
      })

      //病情描述
      .state('tab.conditionDescription', {
        url: '/home/doctor-list/doctor-details/condition-description',
        views: {
          'tab-home': {
            templateUrl: 'templates/condition-description.html',
            controller: 'ConditionDescriptionCtrl'
          }
        }
      })

      //支付
      .state('tab.pay', {
        url: '/home/doctor-list/doctor-details/condition-description/pay',
        views: {
          'tab-home': {
            templateUrl: 'templates/pay.html',
            controller: 'PayCtrl'
          }
        }
      })


      //我的服务
      .state('tab.serves', {
        url: '/serves',
        views: {
          'tab-serves': {
            templateUrl: 'templates/tab-serves.html',
            controller: 'ServesCtrl'
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

      //我的预约
      .state('tab.myOrder', {
        url: '/personal-center/my-order',
        views: {
          'tab-personal-center': {
            templateUrl: 'templates/my-order.html',
            controller: 'MyOrderCtrl'
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
      })
      //添加联系人
      .state('tab.addMan', {
        url: '/personal-center/add-man',
        views: {
          'tab-personal-center': {
            templateUrl: 'templates/add-man.html',
            controller: 'AddManCtrl'
          }
        }
      })
      //修改联系人
      .state('tab.alterMan', {
        url: '/personal-center/alter-man',
        views: {
          'tab-personal-center': {
            templateUrl: 'templates/alter-man.html',
            controller: 'AlterManCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
