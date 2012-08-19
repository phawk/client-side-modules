require.config({
    baseUrl: "/js"
  , paths: {
        "jquery": "libs/jquery/jquery.min"
      , "underscore": "libs/underscore/underscore-min"
      , "backbone": "libs/backbone/backbone-min"
      , "handlebars": "libs/handlebars/handlebars"
      , "text": "libs/require/text"
    }
  , shim: {
        'underscore': {
            exports: '_'
        }
      , 'backbone': {
            deps: ['underscore', 'jquery']
          , exports: 'Backbone'
        }
      , 'handlebars': {
            exports: 'Handlebars'
        }
    }
  , urlArgs: "bust="+(new Date()).getTime() // cache-busting for development
});

require(["core"], function(core) {
    // Start the magic
    core.initialize();
});