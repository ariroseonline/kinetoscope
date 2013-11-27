

App.Router.map(function(){
  this.route('search', { path: '/search/:query' });
  this.route('browse');
  this.resource('movie');
  this.resource('queue');
});

//A user's queue
App.QueueRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('movie');
  }
});

//Grab some popular movies
App.BrowseRoute = Ember.Route.extend({
  model:function(){
    return $.getJSON('http://api.themoviedb.org/3/movie/popular?api_key=1c8646bfb6df13bac2a172fbfc0af4c0')
    .then(function(data){ 
      //clean up returned data
      return data.results.map(function(movie){

        movie.popularity = movie.popularity.toFixed(2);

        //construct a movie poster image URL if it exists, otherwise put in placeholder
        if( movie.poster_path ) {
          movie.posterURL = settings.baseURL + settings.posterSize + movie.poster_path;
        }
        else {
          movie.posterURL = "http://placehold.it/92x137&text=Sry+:("
        }

        return movie;
        
      });
    });
  }
});

//Grab search results from query, then iterate through results
App.SearchRoute = Ember.Route.extend({
	model:function(params){

		return $.getJSON('http://api.themoviedb.org/3/search/movie?query=' + params.query + '&api_key=1c8646bfb6df13bac2a172fbfc0af4c0')
    .then(function(data){ 

      //clean up returned data
      return data.results.map(function(movie){
        movie.popularity = movie.popularity.toFixed(2);
        //construct a movie poster image URL if it exists, otherwise put in placeholder
        if( movie.poster_path ) {
          movie.posterURL = settings.baseURL + settings.posterSize + movie.poster_path;
        }
        else {
          movie.posterURL = "http://placehold.it/92x137&text=Sry+:("
        }

        return movie;
      });
    });
	}
});


