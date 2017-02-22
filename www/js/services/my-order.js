// 我的预约页面服务
angular.module('app.services')
	.factory('MyOrderServe', ['$http','$q',function($http, $q) {
			return {
				myOrder: function(params) {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: GlobalConfig.url.api.order.normalUserUnpaid,
						params: params,
						responseType: 'json',
						timeout: 30000
					}).then(function(data) {
						deferred.resolve(data);
					}, function(error) {
						deferred.reject(error);
					});
					return deferred.promise;
				},
			};
		}]);
