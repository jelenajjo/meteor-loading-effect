Package.describe({
  summary: "A set of creative page loading effects that use SVG animations with Snap.svg.",
  version: "1.0.0",
  name: "jelena:meteor-loading-effect",
  git: "https://github.com/jelenajjo/meteor-loading-effect.git"
});


Package.onUse(function (api) {
  api.use('jquery@1.0.0', 'client');

  api.addFiles('component.css', 'client');
  api.addFiles('snap.svg-min.js', 'client');
  api.addFiles('classie.js', 'client');
  api.addFiles('svgLoader.js', 'client');
  api.addFiles('img/preloader.gif', 'client');

});
