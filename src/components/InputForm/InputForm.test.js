import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './InputForm';

describe('InputForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InputForm
        projects={mockProjects}
        key={'inputForm'}
        addPalette={jest.fn()}
        setCurrentProject={jest.fn()}
        addProject={jest.fn()}
      />
    );
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange when the .input__project-name is changed', () => {
    const mockEvent = { target: { name: 'projectName', value: 'e' } };
    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.input__project-name').simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should call changeProject when the .select-project is changed', () => {
    const mockEvent = {
      target: { name: 'Dining Room', value: 'e' },
      preventDefault: jest.fn()
    };
    wrapper.instance().changeProject = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.select-project').simulate('change', mockEvent);
    expect(wrapper.instance().changeProject).toHaveBeenCalledWith(mockEvent);
  });

  it('should change state when handleChange is called for projectName', () => {
    const mockEvent = { target: { name: 'projectName', value: 'e' } };
    const expected = 'e';
    wrapper.instance().handleChange(mockEvent);
    const results = wrapper.instance().state.projectName;
    expect(results).toEqual(expected);
  });

  it('should change state when handleChange is called for paletteName', () => {
    const mockEvent = { target: { name: 'paletteName', value: 'e' } };
    const expected = 'e';
    wrapper.instance().handleChange(mockEvent);
    const results = wrapper.instance().state.paletteName;
    expect(results).toEqual(expected);
  });

  it('should change state when changeProject is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: { value: 'Project' }
    };
    const expected = 'Project';
    wrapper.instance().changeProject(mockEvent);
    const results = wrapper.instance().state.select;
    expect(results).toEqual(expected);
  });

  it('should change state when changeProject is called with new-project', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: { value: 'new-project' }
    };
    const expected = 'new-project';
    wrapper.instance().changeProject(mockEvent);
    const results = wrapper.instance().state.select;
    expect(results).toEqual(expected);
  });

  it('should change state when handleProjectClick is called with new-project', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: { value: 'new-project' }
    };
    const expected = 'new-project';
    wrapper.instance().handleProjectClick(mockEvent);
    const results = wrapper.instance().state.select;
    expect(results).toEqual(expected);
  });

  it('should change state when handleProjectClick is called with somethin other than new-project', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    const expected = 'Dinning Room';
    wrapper.instance().state.projectName = 'Dinning Room';
    wrapper.instance().handleProjectClick(mockEvent);
    const results = wrapper.instance().state.select;
    expect(results).toEqual(expected);
  });

  it('should call addPalette when handlePaletteClick is called', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.instance().state.paletteName = 'Socks';
    wrapper.instance().handlePaletteClick(mockEvent);
    expect(wrapper.instance().props.addPalette).toHaveBeenCalled();
  });
});

describe('InputForm with select = ProjectName ', () => {
  let wrapper;
  beforeEach(() => {
    let mockAddPalette = jest.fn();
    let mockSetCurrentProject = jest.fn();
    let mockAddProject = jest.fn();
    wrapper = shallow(
      <InputForm
        projects={mockProjects}
        key={'inputForm'}
        addPalette={mockAddPalette}
        setCurrentProject={mockSetCurrentProject}
        addProject={mockAddProject}
      />
    );
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    wrapper.instance().state.select = 'ProjectName';
    expect(wrapper).toMatchSnapshot();
  });

});



describe('handleChange ', () => {
  let wrapper;
  beforeEach(() => {
    let mockAddPalette = jest.fn();
    let mockSetCurrentProject = jest.fn();
    let mockAddProject = jest.fn();
    wrapper = shallow(
      <InputForm
        projects={mockProjects}
        key={'inputForm'}
        addPalette={mockAddPalette}
        setCurrentProject={mockSetCurrentProject}
        addProject={mockAddProject}
      />
    );
  });

  it('should call handleChange when the .input__palette-name is changed', () => {
    const mockEvent = { target: { name: 'Dining Room', value: 'e' } };
    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.input__palette-name').simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });
});

describe('changeProject', () => {
  let wrapper;
  beforeEach(() => {
    let mockAddPalette = jest.fn();
    let mockSetCurrentProject = jest.fn();
    let mockAddProject = jest.fn();
    wrapper = shallow(
      <InputForm
        projects={mockProjects}
        key={'inputForm'}
        addPalette={mockAddPalette}
        setCurrentProject={mockSetCurrentProject}
        addProject={mockAddProject}
      />
    );
  });

  it('should call changeProject when .select-project changes', () => {
    const mockEvent = { target: { name: 'paletteName', value: 'e' } };
    wrapper.instance().changeProject = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.select-project').simulate('change', mockEvent);
    expect(wrapper.instance().changeProject).toHaveBeenCalledWith(mockEvent);
  });
});


//data for test

const mockProjects = [
  {
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
  }
];
