const flickr = require('../../../../src/server/flickr');
const handlers = require('../../../../src/server/handlers');

describe('feed', () => {
  beforeAll(() => {
    flickr.searchPhotos = jest.fn(() => Promise.resolve({}));
  });

  test('`feed` should be defined', () => {
    expect(handlers.feed).toBeDefined;
  });

  test('`feed` should return a promise', () => {
    const request = {};
    const response = {
      send: jest.fn()
    };

    return handlers.feed(request, response)
      .then(() => {
        expect(flickr.searchPhotos).toHaveBeenCalled();
      });
  });
});
