/**
 * @file
 * Client.js
 */
if (Meteor.isClient) {

  Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params

    if (!Meteor.userId()) {
      // if the user is not logged in, render the Login template
      var loggedIn = false;
    } else {
      // otherwise don't hold up the rest of hooks or our route/action function
      // from running
      this.next();
    }
  });

  Template.layoutMain.rendered = function () {
    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      })
    ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
  };

  Template.body.helpers({
    isOwner: function () {
      return this.owner === Meteor.userId();
    },

    isAuthed: function () {
      return Meteor.userId();
    }
  });
}
