$(window).load(function(){
  //Load all FoundationJS once WINDOW is loaded -- needed for responsive mobile toggles to function
  $(document).foundation();
});


//Movie API Image Settings
var settings = {
  baseURL:"http://d3gtl9l2a4fn1j.cloudfront.net/t/p/",
  posterSize: "w92"
}

//Start Ember App and Use Fixtures for Ember Data
App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;
