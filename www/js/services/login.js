// LOGIN页面服务
angular.module('app.services')
	.factory('LoginServe', ['$http','$q',function($http, $q) {
			return {
				login: function(params) {
					var deferred = $q.defer();
					$http({
						method: 'POST',
						url: GlobalConfig.url.api.user.authenticate,
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
