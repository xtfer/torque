/**
 * @file
 * Profile
 */
/* global Users */


Router.route('register', {
  path: '/register',
  yieldRegions: {
    'responsiveMenus': {region: 'top'},
    'defaultMasthead': {region: 'masthead'},
    'register': {region: 'main'},
    'defaultFooter': {region: 'footer'}
  }
});

Router.route('login', {
  path: '/login',
  yieldRegions: {
    'responsiveMenus': {region: 'top'},
    'defaultMasthead': {region: 'masthead'},
    'login': {region: 'main'},
    'defaultFooter': {region: 'footer'}
  }
});

Router.route('profile', {
  path: '/profile',
  yieldRegions: {
    'responsiveMenus': {region: 'top'},
    'defaultMasthead': {region: 'masthead'},
    'profile': {region: 'main'},
    'defaultFooter': {region: 'footer'}
  },
  data: function () { return Users.findOne(this.params._id); }
});
