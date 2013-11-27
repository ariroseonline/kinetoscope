

App.Movie = DS.Model.extend({
	title: DS.attr('string'),
	posterURL: DS.attr('string'),
  popularity: DS.attr('number'),
  vote_average: DS.attr('number'),
  vote_count: DS.attr('number'),
	inQueue: DS.attr('boolean')
});


var rawFixtureData = [
  {
    id: 1,
    title: 'Face/Off',
    poster_path: '/xq9Gif3CN4oyGkMnqreWuGl4Gt.jpg',
    popularity: 2.47849873171607,
    vote_average: 6.2,
    vote_count: 355,
    inQueue: true
  }, 
  {
    id: 2,
    title: 'The Rock',
    poster_path: '/pAVaLJQBRM4JlZEGXvezwbxOd15.jpg',
    popularity: 2.74002582786532,
    vote_average: 6.7,
    vote_count: 434,    
    inQueue: true
  },
  {
    id: 3,
    title: 'Con Air',
    poster_path: '/yhaOQ7xXw0PLHLvg1w0M9zlPdg6.jpg',
    popularity: 5.49601272168232,
    vote_average: 6.1,
    vote_count: 255,    
    inQueue: true
  }, 
  {
    id: 4,
    title: 'Armageddon',
    poster_path: '/coINnuCzcw5FMHBty8hcudMOBnO.jpg',
    popularity: 3.38787838783086,
    vote_average: 6.1,
    vote_count: 703,    
    inQueue: true
  },
  {
    id: 5,
    title: 'Speed',
    poster_path: '/bDLiyoxdK8mZHaeYVOxMZj7WGkb.jpg',
    popularity: 2.85509712906725,
    vote_average: 6.2,
    vote_count: 268,
    inQueue: true
  },
];



App.Movie.FIXTURES =rawFixtureData.map(function(movie){

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

