var searchYouTube = function searchYouTube(options, callback) {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    type: 'GET',
    part: 'snippet',
    key: options.key,
    maxResults: options.max,
    q: options.query,
    videoEmbeddable: "true",
  }, callback );

};

window.searchYouTube = searchYouTube;