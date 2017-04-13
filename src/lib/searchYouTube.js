var searchYouTube = function(options, cb) {
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
 	  		cb(data.items);
 	  	})
	});
}
window.searchYouTube = searchYouTube;