// Router
import angularUIRouter from 'angular-ui-router';
import appRouteConfig from './index-route';

import homeModule from './modules/home/home_modeule.js';
import profileModule from './modules/profile/profile_modeule.js';


var webApp = angular.module('webApp', [angularUIRouter, homeModule, profileModule]);
webApp.config(appRouteConfig)

module.exports = webApp;
