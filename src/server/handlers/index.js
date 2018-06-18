
const fetch = require('node-fetch');
const querystring = require('querystring');
const FLICKR_CONSTANTS = {
  endpoint: 'https://api.flickr.com/services/rest/'
};

const tags = [
  'world cup',
  'russia 2018',
  'football'
];

function feed (request, response) {
  const { query } = request;
  const { page = 1} = query;
  const tagString = tags.join(', ');
  const params = {
    method: 'flickr.photos.search',
    page : page,
    tags: tagString,
    tag_mode: 'all',
    text: tagString,
    per_page:'10',
    extras: 'url_o, url_s, url_n, url_z',
    media: 'photos',
    api_key: process.env.FLICKR_KEY,
    format: 'json',
    nojsoncallback: '?',
    safe_search: '1',
    content_type: '1',
    media: 'photos'
  };
  const uri = `${FLICKR_CONSTANTS.endpoint}?${querystring.stringify(params)}`;

  fetch(uri)
    .then(data => data.json())
    .then((json) => response.send(json))
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  feed: feed
};
