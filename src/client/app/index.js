const { default: Vue }  = require('vue');

Vue.component('image-item', {
  props: ['item'],
  template: '<img v-bind:src="item.src" v-bind:alt="item.title"/>'
});

const app = new Vue({
  el: '#app',
  data: {
    imageList: [],
    message: 'Hello World Cup!'
  }
});

module.exports = {
  app
};
