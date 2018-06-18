
function parseData(data) {
  var root = document.getElementById('root');
  var fragment = document.createDocumentFragment();
  var photos = data.photos.photo || [];
  photos.forEach(function (photo) {
    var img = document.createElement('img');
    img.src = photo.url_n;
    fragment.appendChild(img);
  });
  root.appendChild(fragment);
}

function response(data) {
  parseData(data);
}

function failure(err) {
  console.log(err);
}


function getResults() {
  $.ajax({
    url: '/feed',
    data: {},
    success: response,
    dataType: 'json'
  });
};


(function() {
  getResults();
})();
