// Write your package code here!

if (Meteor.isClient) {

  Torque.Context.title = 'Dashboard';

  // Router.
  var LocalRouterConfig = {
    name: 'dashboard',
    path: '/dashboard',
    templates: {
      'main': 'dashboard',
      'title': 'title'
    },
    subscriptions: function(params, queryParams) {},
    triggersEnter: [],
    triggersExit: []
  };

  Torque.FlowWrapper.process(LocalRouterConfig);

}
