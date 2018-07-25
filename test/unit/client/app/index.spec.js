import Vue from 'vue';
import { shallow } from 'vue-test-utils'
import app from '../../../../src/client/app';

describe('app', () => {
  test('`app` should be defined', () => {
    expect(app).toBeDefined;
  });

  let cp;
  let imageList = [{
    id: '123',
    title: 'an image',
    url_o: 'img src original',
    url_n: 'img src'
  }];

  beforeEach(() => {
    cp = shallow(app, {
      data: {
        imageList: imageList
      }
    });
  });

  test('data should match imageList', () => {
    expect(cp.vm.imageList).toEqual(imageList)
  });

  test('has the expected html structure', () => {
    expect(cp.element).toMatchSnapshot();
  });
});
