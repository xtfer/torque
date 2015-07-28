
Torque.Config = {

  debug: true,

  defaultTemplates: {
    top: 'responsiveMenus',
    masthead: 'defaultMasthead',
    title: '',
    main: 'empty',
    footer: 'defaultFooter'
  },

  defaultRouterConfig: {
    name: 'default',
    path: '/',
    layout: 'layoutMain',
    subscriptions: function(params, queryParams) {},
    triggersEnter: [],
    triggersExit: []
  }
};

Torque.Config.defaultRouterConfig.templates = Torque.Config.defaultTemplates;
