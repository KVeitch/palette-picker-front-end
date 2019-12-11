import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App';


describe('App', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<App />)
  })

  it('should match the snapshot with all the data passed in correctly', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});