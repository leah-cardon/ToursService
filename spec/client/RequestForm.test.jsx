import React from 'react';
import { shallow } from 'enzyme';

import RequestForm from '../../client/src/components/Form/RequestForm';

describe('RequestForm Test Suite', () => {
  const a = () => {};
  const b = () => {};
  const wrapper = shallow(<RequestForm tour call setCall={a} submit={b} />);

  test('Should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('snapshot render should match', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(wrapper).toMatchSnapshot();
    spy.mockRestore();
  });
});
