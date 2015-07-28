/**
 * @file
 * Torque profile registration form settings
 */
if (Meteor.isClient) {

  Template.register.events({

    /*
     * Submit form handler to create a new user.
     */
    'submit form': function(event) {
      event.preventDefault();

      var account = {
        email: TorqueCoreUtil.trimInput(event.target.email.value),
        password: TorqueCoreUtil.trimInput(event.target.password.value)
      };

      // Create the new account.
      Accounts.createUser(account, function (error) {
        if (error) {

          console.log(error.reason); // Output error if registration fails
          Session.set("formErrors", error.reason);

        } else {

          // Log the user in.
          Meteor.loginWithPassword(account.email, account.password, function (err) {
            if (err) {
              // Inform the user that account creation failed
              console.log(err);
              Session.set("formErrors", err.reason);
            } else {
              // Success. Account has been created and the user
              // has logged in successfully.
              console.log('login successful');
            }
          });
        }
      });
    }
  });

  /*
   * Helper to return errors to the client.
   */
  Template.register.helpers({
    formErrors: function() {
      var formErrors = Session.get("formErrors");
      return formErrors;
    }
  });

  Template.register.rendered = function(){

    /*
     * Validation rules for Semantic UI to execute client side.
     */
    $('.ui#register-form').form({
      fields: {
        email: {
          identifier: 'email',
          rules: [
            {
              type: 'empty',
              prompt: 'E-mail address'
            },
            {
              type: 'email',
              prompt: 'This doesn\'t look like a valid email address.'
            }
          ]
        },
        password: {
          identifier: 'password',
          rules: [
            {
              type: 'empty',
              prompt: 'Password'
            },
            {
              type   : 'length[6]',
              prompt : 'Your password must be at least 6 characters.'
            }
          ]
        },
        terms: {
          identifier : 'terms',
          rules: [
            {
              type   : 'checked',
              prompt : 'You must agree to the terms and conditions'
            }
          ]
        }
      }
    });
  };

}
