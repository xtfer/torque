/**
 * @file
 * Torque Profile Login functionality
 */
if (Meteor.isClient) {

  Template.login.helpers({
    formErrors: function() {
      var formErrors = Session.get("formErrors");
      return formErrors;
    }
  });

  Template.login.rendered = function(){

    /*
     * Validation rules for Semantic UI to execute client side.
     */
    $('.ui #login-form').form({
      fields: {
        username: {
          identifier: 'username',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your username.'
            }
          ]
        },
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

  Template.login.events({
    'submit form': function(event) {
      event.preventDefault();
      var emailVar = TorqueCoreUtil.trimInput(event.target.email.value);
      var passwordVar = TorqueCoreUtil.trimInput(event.target.password.value);

      // Log the user in.
      Meteor.loginWithPassword(emailVar, passwordVar);

      redirect('dashboard');
    }
  });
}

