// Filename: collections/projects
define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/event'
], function(_, Backbone, EventModel){
  var EventCollection = Backbone.Collection.extend({
    model: EventModel
  });
  // You don't usually return a collection instantiated
  return EventCollection;
});