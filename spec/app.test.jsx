import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../client/src/components/App';

describe('App Test Suite', () => {
  const wrapper = shallow(<App />);

  test('Should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('should have a div with testApp class', () => {
    const actual = wrapper.find('div').prop('className');
    const expected = 'testApp';

    expect(actual).toEqual(expected);
  });

  test('should render to static HTML', () => {
    const rendered = render(<App />);
    expect(rendered.text()).toEqual('Hello World:0');
  });
});
