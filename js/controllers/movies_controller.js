App.MoviesController = Ember.ArrayController.extend({
  actions: {
    queueMovie: function(movie){
      movie.inQueue = true;
      this.store.createRecord(App.Movie, 
        {
          title: movie.title, 
          posterURL: settings.baseURL + settings.posterSize + movie.poster_path, 
          popularity: movie.popularity, 
          vote_average:movie.popularity, 
          vote_count: movie.vote_count, 
          inQueue: movie.inQueue
        }
      );

    }
  }
});