var searchYouTube = function(options, cb) {
	options = options || 
		{key: window.YOUTUBE_API_KEY, query: 'react', maxResults: 5};
	var data = {
		part: 'snippet',
		type:'video',
		videoEmbeddable: 'true',
		key: options.key,
		maxResults: options.max,
		q: options.query
	};
	$.ajax({
		method: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/search',
		data: data,
		dataType: 'json',
		success: (function(data) {
			if (cb) {
	 	  		cb(data.items);
	 	  		console.log('search results:', data.items);				
			}
 	  	})
	});
}
window.searchYouTube = searchYouTube;