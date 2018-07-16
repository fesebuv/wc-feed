const whatwgFetch = require('whatwg-fetch');
const { default: Vue }  = require('vue');
const { hasScrolled, getUri } = require('./utils');

Vue.component('image-item', {
  props: ['item'],
  template: '<img v-bind:src="item.src" v-bind:alt="item.title"/>'
});

const app = new Vue({
  el: '#app',
  data: {
    page: 0,
    imageList: [],
    message: 'Hello World Cup!'
  },
  methods: {
    fetchImages: function () {
      this.page = this.page + 1;
      const { getImages } = this;
      const uri = getUri (this.page);
      fetch(uri)
        .then((resp) => resp.json())
        .then(getImages);
    },
    getImages: function (data) {
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
    },
    init: function () {
      const { fetchImages } = this;
      fetchImages();

      window.addEventListener('scroll', function(evt) {
        const scrolled = hasScrolled();
        if (scrolled) {
          fetchImages();
        }
      });
    }
  }
});

module.exports = {
  app
};
