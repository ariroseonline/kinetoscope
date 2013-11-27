// App.Router.map(function(){

//   this.resource('movies', function(){
//     this.resource('movie', {path: '/:movie_id'});
//   });

// 	this.resource('search');

//   this.resource('users', function(){
//     this.resource('user', { path:'/:user_id' }, function(){
//       this.route('edit');
//     });
//     this.route('create');
//   });
// });

App.Router.map(function(){
  this.route('search', { path: '/movies/:query' });

  this.route('movies', {path: '/movies'});

  this.resource('movie');
  this.resource('queue');
});


//Grab some popular movies
App.MoviesRoute = Ember.Route.extend({
    model:function(){
      return $.getJSON('http://api.themoviedb.org/3/movie/popular?api_key=1c8646bfb6df13bac2a172fbfc0af4c0')
      .then(function(data){ 
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

App.QueueRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('movie');
  }
});
