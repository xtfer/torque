/**
 * @file
 * Profile
 */

if (Meteor.isClient) {

  if (Torque.Config.debug) {
    var user = Meteor.user();
  }

  Profile = {};

  Profile.logout = function() {
    Meteor.logout(function(err) {
      // callback
      Session.set("ses",false);
    });
  };

  Profile.isLoggedIn = function() {
    "use strict";
    var user = Meteor.user();
    return !!user;
  };

  Torque.Profile = Profile;

  UI.registerHelper('loggedIn', function () {
    "use strict";
    return TorqueProfile.isLoggedIn();
  });
}
