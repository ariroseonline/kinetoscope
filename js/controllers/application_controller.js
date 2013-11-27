App.ApplicationController = Ember.Controller.extend({
  actions: {
    //Handle search throughout the application
    searchMovie: function() {
      var query = this.get('query');
      console.log(query);
      this.transitionTo('search', query);
    }
  }
});
