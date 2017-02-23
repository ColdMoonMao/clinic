// REGISTER页面服务
angular.module('app.services')
	.factory('RegisterServe', ['$http', '$q', function($http, $q) {
		return {
			register: function(params) {
				var deferred = $q.defer();
				$http({
					method: 'POST',
					url: GlobalConfig.url.api.user.register,
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
			sms_code: function(params) {
				var deferred = $q.defer();
				$http({
					method: 'GET',
					url: GlobalConfig.url.api.message.sendRegister,
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
	}]);
