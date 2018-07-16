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

function getTemplate () {
  return `<div>
    <h1>{{ message }}</h1>
    <div class="photos">
      <image-item
        v-for="item in imageList"
        v-bind:item="item"
        v-bind:key="item.id">
      </image-item>
    </div>
  </div>`;
}

module.exports = {
  hasScrolled,
  getUri,
  getTemplate
};
