App.MovieController = Ember.ObjectController.extend({
  actions: {


    unqueueMovie: function(){
      var movie = this.get('model');
      movie.deleteRecord();
      movie.save();
    }


  }
});