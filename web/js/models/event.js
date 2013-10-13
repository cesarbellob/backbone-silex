// Filename: models/project
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var ProjectModel = Backbone.Model.extend({
    defaults: {
      id: 1,
      name: "Name Event",
      venue: "Venue Event"
    }
  });
  // Return the model for the module
  return ProjectModel;
});