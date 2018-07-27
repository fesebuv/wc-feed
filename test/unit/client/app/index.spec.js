import Vue from 'vue';
import { shallow } from 'vue-test-utils'
import app from '../../../../src/client/app';

describe('app', () => {
  describe('should render markup', () => {
    let component;
    let imageList = [{
      id: '123',
      title: 'an image',
      url_o: 'img src original',
      url_n: 'img src'
    }];

    beforeEach(() => {
      component = shallow(app, {
        data: {
          imageList
        }
      });
    });

    test('data should match imageList', () => {
      expect(component.vm.imageList).toEqual(imageList)
    });

    test('has the expected html structure', () => {
      expect(component.element).toMatchSnapshot();
    });
  });
});
