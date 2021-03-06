var Keycloak = require('keycloak-js');
var logger = require('@raincatcher/logger').getLogger();
var mountKeycloakHTTPInterceptor = require("./authInterceptor");
/**
 * Initializes keycloak library
 */
module.exports = function(appName, angularModule, keycloakConfig, initConfig) {
  // Setup KeycloakJS Adapter with the given keycloakConfig
  var keycloakJS = Keycloak(keycloakConfig);

  function initKeycloak() {
    if (window.navigator.onLine) {
      keycloakJS.init(initConfig).success(function() {
        logger.info('Successfully initialised Keycloak instance');
        mountKeycloakHTTPInterceptor(angularModule, keycloakJS);
        keycloakJS.initialized = true;

        // NOTE: Angular should be started after Keycloak has initialized otherwise Angular will cause issues with URL Rewrites
        angular.bootstrap(document, [appName]);
      }).error(function(err) {
        logger.error('Failed to initialise Keycloak due to the following error', err);
      });
    } else {
      angular.bootstrap(document, [appName]);
    }
  }

  /**
  * Initializes the Keycloak JS adapter and make it available to controllers
  * and services in the application.
  */
  angular.element(document).ready(function() {
    // For cordova
    if (window.cordova || window.Cordova) {
      var cordova = window.cordova || window.Cordova;
      initConfig.adapter = "cordova";
      document.addEventListener("deviceready", function onDeviceReady() {
        window.open = cordova.InAppBrowser.open;
        initKeycloak();
      }, false);
    } else {
      initKeycloak();
    }
  });
  return keycloakJS;
};


