const flickr = require('../../../../src/server/flickr');

describe('flickr', () => {
  test('`searchPhotos` should be defined', () => {
    expect(flickr.searchPhotos).toBeDefined;
  });

  test('`searchPhotos` should return photo data', () => {
    const request = {
      query: {}
    };
    return flickr.searchPhotos(request)
      .then((data) => {
        expect(data).toHaveProperty('photos');
      });
  });

  test('`searchPhotos` throw an error', () => {
    flickr.FLICKR_CONSTANTS.endpoint = jest.fn(() => '');
    console.log = jest.fn();

    const request = {
      query: ''
    };

    return flickr.searchPhotos()
      .then((data) => {
        console.log(data, '<< data');
      })
      .catch((err) => {
        expect(err).toBeInstanceOf(Error);
      });
  });
});
