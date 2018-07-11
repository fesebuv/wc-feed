
const flickr = require('../flickr');

function feed (request, response) {
  return flickr.searchPhotos(request)
    .then((json) => response.send(json));
}

module.exports = {
  feed
};
