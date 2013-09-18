// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        templates: '../templates',
        bootstrap: 'libs/bootstrap/bootstrap',
        holder: 'libs/holder',
        googleanalytic: 'scripts/googleanalytic'
    },
    shim: {
        'backbone': ['underscore', 'jquery'],
        'bootstrap': ['jquery'],
        'holder': ['jquery','bootstrap']
    }
});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});