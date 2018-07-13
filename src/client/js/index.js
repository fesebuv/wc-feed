
const whatwgFetch = require('whatwg-fetch');
const querystring = require('querystring');
const { default: Vue }  = require('vue');
const { app } = require('../app');


var PAGE = 0;

function hasScrolled () {
  return (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
}

function getResults () {
  PAGE = PAGE + 1;
  const params = {
    page: PAGE
  };
  const uri = `/feed?${querystring.stringify(params)}`;
  fetch(uri)
    .then((resp) => resp.json())
    .then(getImages)
};

function getImages (data) {
  if(!Array.isArray(app.imageList)) {
    return;
  }

  var photos = data.photos.photo || [];
  photos.forEach(function (photo) {
    var id = photo.id || '';
    var src = photo.url_o || photo.url_n;
    var title = photo.title || '';

    app.imageList.push({
      id: id,
      src: src,
      title: title
    });
  });
}

(function () {
  getResults();
})();

window.addEventListener('scroll', function(evt) {
  const scrolled = hasScrolled();
  if (scrolled) {
    getResults();
  }
});
