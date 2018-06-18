
const fetch = require('node-fetch');
const querystring = require('querystring');
const FLICKR_CONSTANTS = {
  endpoint: 'https://api.flickr.com/services/rest/'
};

const tags = [
  'worldcup',
  'world cup',
  'soccer'
];

function feed (request, response) {
  const tagString = tags.join(', ');
  const params = {
    'method': 'flickr.photos.search',
    'page' : 1,
    'tags': tagString,
    'text': tagString,
    'per_page':'10',
    'extras': 'url_o, url_s, url_n, url_z',
    'media': 'photos',
    'api_key': process.env.FLICKR_KEY,
    'format': 'json',
    'nojsoncallback': '?'
  };
  const uri = `${FLICKR_CONSTANTS.endpoint}?${querystring.stringify(params)}`;
  fetch(uri)
  .then(data => data.json())
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
    return data;
  })
  .then((json) => response.send(json))
  .catch((err) => {
    console.log(err);
  });
}

module.exports = {
  feed: feed
};
