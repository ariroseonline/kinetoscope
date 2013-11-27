$(window).load(function(){
  //Load all foundation JS once window is loaded -- needed for responsive mobile toggles to function
  $(document).foundation();
});


//Get API settings from TMDB
$.getJSON("http://api.themoviedb.org/3/configuration?api_key=1c8646bfb6df13bac2a172fbfc0af4c0&callback=?").then(function(data){
    settings.baseURL = data.images.base_url;
});

