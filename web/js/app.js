// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'bootstrap',
  'holder',
  'googleanalytic'
], function($, _, Backbone, Router, Bootstrap, Holder, _gaq){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }
  return {
    initialize: initialize
  };
});