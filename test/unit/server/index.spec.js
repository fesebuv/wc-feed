const server = require('../../../src/server');

describe('server', () => {
  test('server should be defined', () => {
    expect(server).toBeDefined;
  });
});

describe('`server.start`', () => {
  beforeEach(() => {
    console.log = jest.fn();
    server.app.listen = jest.fn();
  });

  test('should start application', () => {
    expect.assertions(1);
    return server.start()
      .then(() => {
        expect(server.app.listen).toHaveBeenCalled();
      });
  });

  test('should throw error', () => {
    server.app.listen = jest.fn(() => {
      throw new Error('An error has occurred!');
    });

    return server.start()
      .catch((err) => {
        expect(err).toBeInstanceOf(Error);
      });
  });
});
