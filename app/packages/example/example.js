// Write your package code here!

Example = {};

if (Meteor.isClient) {
  UI.registerHelper("Example", function() {
    return Example;
  });
}

