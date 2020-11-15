import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../client/src/components/App';

describe('App Test Suite', () => {
  const wrapper = shallow(<App />);

  test('Should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('should have a div with appContainer class', () => {
    const actual = wrapper.find('div').prop('className');
    const expected = 'appContainer';

    expect(actual).toEqual(expected);
  });
});
