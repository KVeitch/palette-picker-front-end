import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  global.Math.random = jest
    .spyOn(global.Math, 'random')
    .mockImplementation(() => 0.123);

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
