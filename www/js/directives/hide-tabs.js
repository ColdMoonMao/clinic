/**
 * Created by a1 on 2017/2/18.
 */
angular.module('app.directives')
<<<<<<< HEAD
	.directive('hideTabs', function($rootScope) {
		return {
			restrict: 'A', //属性
			replace: false,
			link: function(scope, element, attr) {
				scope.$watch(attr.hideTabs, function(value) { //返回不执行watch,同一个view下,么有变化不执行
					$rootScope.hideTab = value;
					console.log($rootScope.hideTab);
				});
				scope.$on('$ionicView.beforeLeave', function() {
					$rootScope.hideTab = false; //返回之前让都显示
=======
  .directive('hideTabs',function ($rootScope) {
    return{
      restrict:'A',//属性
      replace:false,
      link:function (scope,element,attr) {
        scope.$watch(attr.hideTabs,function (value) {//返回不执行watch,同一个view下,么有变化不执行
          $rootScope.hideTab = value;
          console.log($rootScope.hideTab);
        });
        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTab = false;//返回之前让都显示
>>>>>>> 5d2060d81bf42b0448d50c97d2fe73a79dccac91

				});

			}

		}
	})