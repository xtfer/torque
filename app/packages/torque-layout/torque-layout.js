/**
 * @file
 * Torque layout
 */

if (Meteor.isClient) {

  // Set the FlowLayout root element to the body node.
  FlowLayout.setRoot('body');

  Template.title.helpers({
    context: function() {
      "use strict";

      return Torque.Context;
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
      });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
  };

  Template.layoutMain.helpers({
    isOwner: function () {
      return this.owner === Meteor.userId();
    }
  });
}
