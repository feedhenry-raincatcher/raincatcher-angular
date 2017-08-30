var ngModule;
try {
  ngModule = angular.module('wfm.angularjs.auth.directives');
} catch (e) {
  ngModule = angular.module('wfm.angularjs.auth.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/login.tpl.html',
    '<div class="login" flex ng-if="ctrl.hasSession !== undefined">\n' +
    '\n' +
    '  <div layout-padding  class="area">\n' +
    '    <div ng-hide="ctrl.hasSession">\n' +
    '      <form name="loginForm" ng-submit="ctrl.login(loginForm.$valid)" novalidate>\n' +
    '        <h1 class="md-headline">FeedHenry RainCatcher</h1>\n' +
    '\n' +
    '        <md-input-container class="md-block">\n' +
    '          <label>Username</label>\n' +
    '          <input ng-model="ctrl.username" id="username" name="username" required>\n' +
    '          <div ng-messages="loginForm.username.$error" ng-show="loginForm.$submitted || loginForm.username.$dirty">\n' +
    '            <div ng-message="required">A username is required.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '        <md-input-container class="md-block">\n' +
    '          <label>Password</label>\n' +
    '          <input ng-model="ctrl.password" id="password" name="password" type="password" autocomplete="off" required>\n' +
    '          <div ng-messages="loginForm.password.$error" ng-show="loginForm.$submitted || loginForm.password.$dirty">\n' +
    '            <div ng-message="required">A password is required.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <div ng-messages=\'ctrl.loginMessages\'>\n' +
    '          <div style="color: red" ng-message=\'error\'>Authentication Failed! Try Again. ({{ctrl.loginErrorMessage}})</div>\n' +
    '          <div style="color: green" ng-message=\'success\'>Authentication Success</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <md-button type="submit" class="md-raised md-primary md-hue-2">Log in</md-button>\n' +
    '\n' +
    '      </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="ctrl.hasSession">\n' +
    '      <md-button class="md-raised md-primary md-hue-2" ng-click="ctrl.logout()">Log out</md-button>\n' +
    '    </div>\n' +
    '\n' +
    '    <p class="md-body-1">Trouble logging in? Contact the switchboard.</p>\n' +
    '\n' +
    '    </md-content>\n' +
    '\n' +
    '  </div>\n' +
    '\n' +
    '</div><!-- login -->\n' +
    '');
}]);
