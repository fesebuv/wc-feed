
const whatwgFetch = require('whatwg-fetch');
const querystring = require('querystring');
const { app } = require('../app');

let PAGE = 0;

function hasScrolled () {
  return (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
}

function getUri () {
  PAGE = PAGE + 1;
  const params = {
    page: PAGE
  };
  return `/feed?${querystring.stringify(params)}`;
}

function fetchImages () {
  const uri = getUri ();
  fetch(uri)
    .then((resp) => resp.json())
    .then(getImages)
};

function getImages (data) {
  if(!Array.isArray(app.imageList)) {
    return;
  }

  const photos = data.photos.photo || [];

  photos.forEach(function (photo) {
    const { id = '', title = '', url_o, url_n } = photo;
    const src = url_o || url_n;

    app.imageList.push({
      id,
      src,
      title
    });
  });
}

(function () {
  fetchImages();
})();

window.addEventListener('scroll', function(evt) {
  const scrolled = hasScrolled();
  if (scrolled) {
    fetchImages();
  }
});
