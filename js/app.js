$(window).load(function(){
  $(document).foundation();


});

var settings = {
  baseURL:null,
  posterSize: "w92"
}

$.getJSON("http://api.themoviedb.org/3/configuration?api_key=1c8646bfb6df13bac2a172fbfc0af4c0&callback=?").then(function(data){
    settings.baseURL = data.images.base_url;
    startApp();
});

var startApp = function(){
  App = Ember.Application.create();
  App.Router.map(function(){
  	this.resource('about');
  	this.resource('movies');
  });

  App.MoviesRoute = Ember.Route.extend({
  	model:function(){

      //Grab search results for query, then iterate through results
  		return $.getJSON('http://api.themoviedb.org/3/search/movie?query=fight&api_key=1c8646bfb6df13bac2a172fbfc0af4c0')
      .then(function(data){ 
        return data.results.map(function(movie){

          //Grab each individual movie's specific information based on it's ID
          return $.getJSON("http://api.themoviedb.org/3/movie/" + movie.id + "?api_key=1c8646bfb6df13bac2a172fbfc0af4c0").
          then(function(data){
            movie.overview = data.overview;

            //construct a movie poster image URL if it exists, otherwise put in placeholder
            if( movie.poster_path ) {
              movie.posterURL = settings.baseURL + settings.posterSize + movie.poster_path;
            }
            else {
              movie.posterURL = "http://placehold.it/92x137&text=Sry+:("
            }

            return movie;

          })



        });
      });
  	}
  });

  App.MovieRoute = Ember.Route.extend({
    model: function(params) {
      return $.getJSON('http://tomdale.net/api/get_post/?id=' + params.movie_id + '&callback=?').then(function(data){
          data.post.body = data.post.content;
          return data.post;
        });
      }
  });

  App.MovieController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
      edit: function(){
        this.set('isEditing', true);
      },

      doneEditing: function(){
        this.set('isEditing', false);
      }
    }

  });

  Ember.Handlebars.helper('format-date', function(date){
    return moment(date).fromNow();
  });

}


