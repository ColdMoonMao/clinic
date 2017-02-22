//changePassword
angular.module('app.services')
	.factory('ChangePasswordServe', function($http,$q) {
		return {
			//获取医生列表
			changePassword: function(params) {
				var deferred = $q.defer();
				$http({
					method: 'GET',
					url: GlobalConfig.url.api.user.changePassword,
					params: params,
					responseType: 'json',
					timeout: 30000
				}).then(function(data) {
					deferred.resolve(data);
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			}
		};
	})
