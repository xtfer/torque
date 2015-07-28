Package.describe({
  name: 'torque:torque-core',
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
    'underscore',
    'meteorhacks:flow-router',
    'meteorhacks:flow-layout'
  ]);
  api.addFiles([
    'lib/torque.js',
    'lib/config.js',
    'lib/context.js',
    'lib/flow-wrapper.js',
    'lib/session-message.js',
    'lib/util.js',
    'torque-core.js'
  ]);
  api.export('Torque');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('torque:torque-core');
  api.addFiles('torque-core-tests.js');
});
