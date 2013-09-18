// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/projects/list'
], function($, _, Backbone, ProjectListView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            "proj": "showProjects",
            "*actions": "defaultAction" // matches http://example.com/#anything-here
        }
    });
    var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('route:showProjects', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var projectListView = new ProjectListView();
      projectListView.render();
    });
    
      // As above, call render on our loaded module
      // 'views/users/list'
    /*app_router.on('showUsers', function(){
      var userListView = new UserListView();
      userListView.render();
    });*/
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      //alert(actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});