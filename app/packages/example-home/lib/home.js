/**
 * @file
 * Contains the quotivate-home configuration
 */
/* globals FlowRouter */

if (Meteor.isClient) {

  var LocalRouterConfig = {
    name: 'home',
    path: '/',
    templates: {
      masthead: 'homeMasthead',
      main: 'home'
    },
    subscriptions: function(params, queryParams) {},
    triggersEnter: [],
    triggersExit: []
  };

  Torque.FlowWrapper.process(LocalRouterConfig);
}
