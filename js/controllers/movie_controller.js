App.MovieController = Ember.ObjectController.extend({
  actions: {
    //Once movie's queued from  searching or browsing API feeds, create a model for the queue
    enqueueMovie: function(movie){
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
    },
    unqueueMovie: function(){
      var movie = this.get('model');
      movie.deleteRecord();
      movie.save();
    }
  }
});