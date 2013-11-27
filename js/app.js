
var settings = {
  baseURL:"http://d3gtl9l2a4fn1j.cloudfront.net/t/p/",
  posterSize: "w92"
}

App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

Ember.Handlebars.helper('format-date', function(date){
  return moment(date).fromNow();
});
