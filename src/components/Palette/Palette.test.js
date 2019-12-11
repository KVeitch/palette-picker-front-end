import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette';

describe('Palette', () => {
  let wrapper;
  const mockPalette = {"id": 1,"palette_name": "Colors","project_id": 1,"color0": "6320ee","color1": "D5f2e3","color2": "999950","color3": "C7B446","color4": "C2B078"}
  beforeEach(() => {
    wrapper = shallow(<Palette key={1} palette={mockPalette}/>);
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
