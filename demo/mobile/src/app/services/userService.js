var Promise = require("bluebird");

function UserService(authService) {
  this.auth = authService;
}

// FIXME - remove duplicate function
UserService.prototype.readUser = function readUser() {
  return this.auth.getProfile();
};

UserService.prototype.getProfile = function getProfile() {
  return this.auth.getProfile();
};

UserService.prototype.hasResourceRole = function hasResourceRole(role) {
  return this.auth.hasResourceRole(role);
};

UserService.prototype.login = function login() {
  return this.auth.login();
};

UserService.prototype.logout = function logout() {
  return this.auth.logout();
};


angular.module('wfm.common.apiservices').service('userService', ['authService', function(authService) {
  return new UserService(authService);
}]);
