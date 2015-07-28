/**
 * @file
 * Routes for Torque profile
 */

if (Meteor.isClient) {

  var RegisterRouterConfig = {
    name: 'register',
    path: '/register',
    templates: {
      'main': 'register'
    },
    subscriptions: function(params, queryParams) {},
    triggersEnter: [],
    triggersExit: []
  };
  Torque.FlowWrapper.process(RegisterRouterConfig);

  var LoginRouterConfig = {
    name: 'login',
    path: '/login',
    templates: {
      'main': 'login'
    },
    subscriptions: function(params, queryParams) {},
    triggersEnter: [],
    triggersExit: []
  };
  Torque.FlowWrapper.process(LoginRouterConfig);

  var ProfileRouterConfig = {
    name: 'profile',
    path: '/profile',
    templates: {
      'main': 'profile'
    },
    subscriptions: function(params, queryParams) {},
    triggersEnter: [],
    triggersExit: []
  };
  Torque.FlowWrapper.process(ProfileRouterConfig);

  var LogoutRouterConfig = {
    name: 'logout',
    path: '/logout',
    templates: {
      'main': 'logout'
    },
    subscriptions: function(params, queryParams) {},
    triggersEnter: [],
    triggersExit: []
  };
  LoginRouterConfig.triggersEnter = [Torque.Profile.logout];
  Torque.FlowWrapper.process(LogoutRouterConfig);
}
