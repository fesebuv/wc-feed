
const whatwgFetch = require('whatwg-fetch');
const querystring = require('querystring');
const { default: Vue }  = require('vue');

var PAGE = 0;

// function parseData (data) {
//   var fragment = document.createDocumentFragment();
//   var photos = data.photos.photo || [];
//   photos.forEach(function (photo) {
//     var src = photo.url_o || photo.url_n;
//     var img = document.createElement('img');
//     img.src = src;
//     img.alt = src;
//     fragment.appendChild(img);
//   });
//   return fragment;
// }
//
// function response (data) {
//   var fragment = parseData(data);
//   var root = document.getElementById('root');
//   root.appendChild(fragment);
// }

function getResults () {
  PAGE = PAGE + 1;
  const params = {
    page: PAGE
  };
  const uri = `/feed?${querystring.stringify(params)}`;
  fetch(uri)
    .then((resp) => resp.json())
    // .then(response);
    .then(getImages)
};

(function () {
  getResults();
})();

window.addEventListener('scroll', function(evt) {
  const hasScrolled = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
  if (hasScrolled) {
    getResults();
  }
});


function getImages (data) {
  var photos = data.photos.photo || [];
  photos.forEach(function (photo) {
    var src = photo.url_o || photo.url_n;
    app.imageList.push({
      src: src
    });
  });
}

Vue.component('image-item', {
  props: ['item'],
  template: '<img v-bind:src="item.src"/>'
});

var app = new Vue({
  el: '#app',
  data: {
    imageList: [],
    message: 'Hello World Cup!'
  }
});
