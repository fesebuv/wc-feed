const fetch = require('node-fetch');
const querystring = require('querystring');

const FLICKR_CONSTANTS = {
  endpoint: 'https://api.flickr.com/services/rest/',
};

const tags = [
  'world cup',
  'russia 2018',
  'football'
];

const extras = [
  'url_o',
  'url_s',
  'url_n',
  'url_z'
];

function getUri (request = {}) {
  const { query } = request;
  const { page = 1} = query;
  const tagString = tags.join(', ');
  const extrasString = extras.join(', ');

  const params = {
    method: 'flickr.photos.search',
    page : page,
    tags: tagString,
    tag_mode: 'all',
    text: tagString,
    per_page: '10',
    extras: extrasString,
    media: 'photos',
    api_key: process.env.FLICKR_KEY,
    format: 'json',
    nojsoncallback: '?',
    safe_search: '1',
    content_type: '1',
    media: 'photos'
  };

  return `${FLICKR_CONSTANTS.endpoint}?${querystring.stringify(params)}`;
}

function searchPhotos (request, response) {
  const uri = getUri(request);

  return fetch(uri)
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

module.exports = {
  searchPhotos
};
