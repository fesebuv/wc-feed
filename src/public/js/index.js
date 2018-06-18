
var PAGE = 0;

function parseData(data) {
  var fragment = document.createDocumentFragment();
  var photos = data.photos.photo || [];
  photos.forEach(function (photo) {
    var img = document.createElement('img');
    img.src = photo.url_n;
    fragment.appendChild(img);
  });
  return fragment;
}

function response(data) {
  var fragment = parseData(data);
  var root = document.getElementById('root');
  root.appendChild(fragment);
}

function getResults() {
  PAGE = PAGE + 1;
  $.ajax({
    url: '/feed',
    data: {
      page: PAGE
    },
    success: response,
    dataType: 'json'
  });
};

(function() {
  getResults();
})();

$(window).scroll(function(){
  if ($(window).scrollTop() === $(document).height() - $(window).height()){
    getResults();
  }
});
