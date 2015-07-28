

if (Meteor.isClient) {

  Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    if (typeof Session !== 'undefined') {
      var message = Session.get('displayMessage');
      if (message) {
        var stringArray = message.split('&amp;');
        ui.notify(stringArray[0], stringArray[1])
          .effect('slide')
          .closable();

        Session.set('displayMessage', null);
      }
    }
  });
}
