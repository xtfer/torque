/**
 * @file
 * Torque core
 */

if (Meteor.isClient) {

  // Debugging.
  // @todo: remove this for production.
  if (Torque.Config.debug) {
    FlowRouter.triggers.enter([TorqueCoreUtil.debugRoute]);
  }
}
