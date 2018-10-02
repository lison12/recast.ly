var searchYouTube = (options, callback) => {
  // TODO

  // var GET = function(options, successCB, errorCB = null) {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {maxResults: options.max,
      key: options.key,
      q: options.query,
      part: 'snippet',
      type: 'video'},
    success: (data) => callback(data.items),
    error: function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  });
  // };
};

export default searchYouTube;
