// HOME页面服务
angular.module('app.services')
	.factory('HomeServe', ['$http','$q',function($http, $q) {
			return {
				getRecommend: function(params) {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: GlobalConfig.url.api.doctor.recommend,
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
