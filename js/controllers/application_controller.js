App.ApplicationController = Ember.Controller.extend({
  actions: {
    searchMovie: function() {
      alert("yo");
      // the current value of the text field

      var query = this.get('searchTerm');
      this.transitionToRoute('movies', { query: query });
    }
  }
});



		// searchMovie: function() {
		// 	//Get name/id/poster whatever from search page
		// 	alert(this.get('searchTerm'));
		// 	var posterURL = "http://placehold.it/92x137";
		// 	var title=this.get('searchedTitle');
		// 	var popularity = .5;
		// 	var vote_count = 23;
		// 	var vote_average = 9.5;

		// 	var movie = this.store.createRecord('movie', {
		// 		title: title,
		// 		posterURL: posterURL,
		// 		popularity: popularity,
		// 		vote_count: vote_count,
		// 		vote_average:vote_average,
		// 		inQueue: true
		// 	});

		// 	this.set('searchedTitle', '');

		// 	movie.save();
		// }