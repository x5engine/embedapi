Package.describe({
  name: "vulcan:embedapi",
  summary: "Vulcan Embedapi module package",
  version: '1.0.0',
  git: 'git@github.com:meteorplus/embedapi.git'
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'vulcan:core@1.3.0',
    'vulcan:posts@1.3.0',
    'fourseven:scss'
  ]);

  api.addFiles([
    'lib/embedly.js',
    'lib/custom_fields.js'
  ], ['client', 'server']);

  api.addFiles([
    // 'lib/server/get_embedly_data.js'
    'lib/server/mutations.js'
  ], ['server']);

  api.addFiles([
    'lib/stylesheets/embedly.scss'
  ], ['client']);

});
