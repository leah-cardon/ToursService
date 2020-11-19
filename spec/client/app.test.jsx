import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/src/components/App';

describe('App Test Suite', () => {
  const wrapper = shallow(<App />);

  test('Should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('should have a div with appContainer class', () => {
    const divs = wrapper.find('div');

    let found = false;

    divs.forEach((div) => {
      div.prop('className') === 'appContainer' ? found = true : null;
    });

    expect(found).toEqual(true);
  });

  test('snapshot render should match', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
