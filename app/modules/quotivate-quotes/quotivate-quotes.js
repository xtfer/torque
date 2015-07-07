/**
 * @file
 * Quotes
 */
/* global Router */

Router.route('quotes', {
  path: 'quotes',
  yieldRegions: {
    'responsiveMenus': {region: 'top'},
    'defaultMasthead': {region: 'masthead'},
    'quotes': {region: 'main'},
    'defaultFooter': {region: 'footer'}
  }
});

/**
 * Meteor.isClient
 */
if (Meteor.isClient) {
  // This code only runs on the client

  Meteor.subscribe("quotes");

  Template.body.helpers({
    quotes: function () {
      return Quotes.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-quote": function (event) {
      // This function is called when the new quote form is submitted

      var text = event.target.text.value;

      Meteor.call("addQuote", text);

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });
}

/**
 * Meteor.isServer
 */
if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish("quotes", function () {
    return Quotes.find({});
  });
}

/**
 * Methods
 */
// At the bottom of simple-todos.js, outside of the client-only block
Meteor.methods({

  addQuote: function (text) {
    // Make sure the user is logged in before inserting a Quote
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Quotes.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId()
    });
  },

  deleteQuote: function (quoteId) {
    var quote = Quotes.findOne(quoteId);
    if (quote.private && quote.owner !== Meteor.userId()) {
      // If the quote is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }
    Quotes.remove(quoteId);
  },

  setChecked: function (quoteId, setChecked) {
    var quote = Quotes.findOne(quoteId);
    if (quote.private && quote.owner !== Meteor.userId()) {
      // If the quote is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }
    Quotes.update(quoteId, { $set: { checked: setChecked} });
  },

  setPrivate: function (quoteId, setToPrivate) {
    var quote = Quotes.findOne(quoteId);

    // Make sure only the quote owner can make a quote private
    if (quote.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Quotes.update(quoteId, { $set: { private: setToPrivate } });
  }
});
