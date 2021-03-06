import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('Project', () => {
  let wrapper;
  const mockProject = {
    project_name: 'Dining Room',
    project_id: 1,
    palettes: [
      {
        id: 1,
        palette_name: 'Colors',
        project_id: 1,
        color0: '6320ee',
        color1: 'D5f2e3',
        color2: '999950',
        color3: 'C7B446',
        color4: 'C2B078'
      },
      {
        id: 2,
        palette_name: 'Bright',
        project_id: 1,
        color0: '786fa6',
        color1: 'f19066',
        color2: 'FFFF00',
        color3: 'EDFF21',
        color4: 'A98307'
      },
      {
        id: 3,
        palette_name: 'Joker',
        project_id: 1,
        color0: '211a1d',
        color1: '6320ee',
        color2: 'D5f2e3',
        color3: '8075ff',
        color4: '8fc93a'
      },
      {
        id: 4,
        palette_name: 'Russian Flat',
        project_id: 1,
        color0: 'f19066',
        color1: '786fa6',
        color2: 'f19066',
        color3: '786fa6',
        color4: '574b90'
      },
      {
        id: 5,
        palette_name: 'For Bill',
        project_id: 1,
        color0: '16a085',
        color1: '2ecc71',
        color2: 'AEA04B',
        color3: 'E6D690',
        color4: 'CDA434'
      }
    ]
  };
  const { palettes, project_name } = mockProject;
  beforeEach(() => {
    wrapper = shallow(
      <Project
        key={'Project' + 1}
        palettes={palettes}
        project_name={project_name}
      />
    );
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
