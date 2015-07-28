/**
 * @file
 * Torque utilities
 */

TorqueCoreUtil = {

  /**
   * Trim an input string.
   * @param val
   * @returns {XML|string|*|void}
   */
  trimInput: function (val) {
    return val.replace(/^\s*|\s*$/g, "");
  },

  debugRoute: function (context) {
    // context is the output of `FlowRouter.current()`
    if (context.params) {
      console.log("Params:", context.params);
    }
    if (context.queryParams) {
      console.log("Query Params:", context.queryParams);
    }
  }

};
