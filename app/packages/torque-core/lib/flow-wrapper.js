/**
 * @file
 * Flow wrapper
 */

Torque.FlowWrapper = {

  process: function(localRouterConfig) {

    // Deeply clone the router config, or everything breaks.
    var defaultConfig = Torque.Config.defaultRouterConfig;
    var WorkingConfig = JSON.parse(JSON.stringify(defaultConfig));

    // Merge configuration.
    var WorkingTemplates = WorkingConfig.templates;
    var LocalTemplates = localRouterConfig.templates;

    _.extend(WorkingTemplates, LocalTemplates);
    _.extend(WorkingConfig, localRouterConfig);
    WorkingConfig.templates = WorkingTemplates;

    FlowRouter.route(WorkingConfig.path, {
      name: WorkingConfig.name,

      // Middlewares.
      middlewares: [],

      // Subscriptions
      subscriptions: WorkingConfig.subscriptions(),

      // Actions.
      action: function(params, queryParams) {

        FlowLayout.render(WorkingConfig.layout, WorkingConfig.templates);
      }
    });
  }
};
