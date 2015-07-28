Package.describe({
  name: 'torque:torque-layout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'templating',
    'torque:torque-profile',
    'meteorhacks:flow-layout'
  ]);
  api.addFiles([
    'templates/masthead/defaultMasthead.html',
    'templates/masthead/homeMasthead.html',
    'templates/menu/mainMenu.html',
    'templates/menu/mastheadMenu.html',
    'templates/menu/responsiveMenus.html',
    'templates/menu/userMenu.html',
    'templates/app.html',
    'templates/defaultFooter.html',
    'templates/empty.html',
    'templates/layoutMain.html',
    'templates/title.html',
    'torque-layout.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('torque:torque-layout');
  api.addFiles('torque-layout-tests.js');
});
