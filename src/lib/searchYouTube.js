var searchYouTube = function(options, cb) {
  $.get('https://www.googleapis.com/youtube/v3/search', 
  {
  	part: 'snippet',
    key: options.key,
    maxResults: options.max,
    q: options.query,
    type:'video',
    videoEmbeddable: 'true'
  }) 
  	.done(function(data) {
  		cb(data.items);
  		console.log('good', data);
  	})
	.fail(function(data){
		console.log('error', data);
	});
}
window.searchYouTube = searchYouTube;