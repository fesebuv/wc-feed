const querystring = require('querystring');

function hasScrolled () {
  if (window && document) {
    return (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
  }
  return false;
}

function getUri (page = 0) {
  const params = {
    page
  };
  return `/feed?${querystring.stringify(params)}`;
}

module.exports = {
  hasScrolled,
  getUri
};
