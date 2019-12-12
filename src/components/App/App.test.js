import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { deleteProject } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');

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

  it('should call componentDidMount once', () => {
    let componentDidMountSpy = jest.spyOn(App.prototype, 
                           'componentDidMount');
    let component = shallow(<App/>);
  expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

  it('should call getStartingColors and setUserProjects from `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getStartingColors');
    jest.spyOn(instance, 'setUserProjects');
    instance.componentDidMount();
    expect(instance.getStartingColors).toHaveBeenCalledTimes(1); 
    expect(instance.setUserProjects).toHaveBeenCalledTimes(1); 
  });

  it('should generate random hexes', ()=>{
    let expected="1f7ced"
    let results = wrapper.instance().generateColor()
    expect(results).toEqual(expected)
  })

  it('should random colors',()=>{
    let expected = {
      color0: { hex: "1f7ced", isLocked: false },
      color1: { hex: "1f7ced", isLocked: false },
      color2: { hex: "1f7ced", isLocked: false },
      color3: { hex: "1f7ced", isLocked: false },
      color4: { hex: "1f7ced", isLocked: false }
    }
    wrapper.instance().getStartingColors();
    let results = {
      color0: wrapper.instance().state.color0,
      color1: wrapper.instance().state.color1,
      color2: wrapper.instance().state.color2,
      color3: wrapper.instance().state.color3,
      color4: wrapper.instance().state.color4
    }

    expect(results).toEqual(expected)
  })

  it('should make random color palettes',()=>{
    let expected = {
      color0: { hex: "1f7ced", isLocked: false },
      color1: { hex: "1f7ced", isLocked: false },
      color2: { hex: "1f7ced", isLocked: false },
      color3: { hex: "1f7ced", isLocked: false },
      color4: { hex: "1f7ced", isLocked: false }
    }
    wrapper.instance().getColors();
    let results = {
      color0: wrapper.instance().state.color0,
      color1: wrapper.instance().state.color1,
      color2: wrapper.instance().state.color2,
      color3: wrapper.instance().state.color3,
      color4: wrapper.instance().state.color4
    }
    expect(results).toEqual(expected)
  })

  it('should toggleColorLock', ()=>{
    let expected = { hex: "1f7ced", isLocked: true }
    wrapper.instance().toggleColorLock('color0', "#1f7ced")
    let results = wrapper.instance().state.color0
    expect(results).toEqual(expected)
  })

  it('should change the (state) current project', ()=>{
    let expected = 2
    wrapper.instance().state.projects = mockProjects
    wrapper.instance().setCurrentProject('Room2')
    let results = wrapper.instance().state.currentProjectId
    expect(results).toEqual(expected)
  })

  it('should have a user',()=>{
    let expected = { id: 1, user_name: 'Bob' }
    let results = wrapper.instance().state.user
    expect(results).toEqual(expected)
  })

  it('should call deleteProject and remove a project', () => {
    wrapper.instance().state.projects = mockProjects
    wrapper.instance().removeProject(1)
    let results = wrapper.instance().state.projects
    expect(deleteProject).toHaveBeenCalledTimes(1); 
    expect(results).toEqual(room2)
  });
  

});

//Data for tests
const mockProjects = [
  {
    project_name: 'Dining Room',
    id: 1,
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
  },
  {
    project_name: 'Room2',
    id: 2,
    palettes: [
      {
        id: 1,
        palette_name: 'Colors',
        project_id: 2,
        color0: '6320ee',
        color1: 'D5f2e3',
        color2: '999950',
        color3: 'C7B446',
        color4: 'C2B078'
      },
      {
        id: 2,
        palette_name: 'Bright',
        project_id: 2,
        color0: '786fa6',
        color1: 'f19066',
        color2: 'FFFF00',
        color3: 'EDFF21',
        color4: 'A98307'
      },
      {
        id: 3,
        palette_name: 'Joker',
        project_id: 2,
        color0: '211a1d',
        color1: '6320ee',
        color2: 'D5f2e3',
        color3: '8075ff',
        color4: '8fc93a'
      },
      {
        id: 4,
        palette_name: 'Russian Flat',
        project_id: 2,
        color0: 'f19066',
        color1: '786fa6',
        color2: 'f19066',
        color3: '786fa6',
        color4: '574b90'
      },
      {
        id: 5,
        palette_name: 'For Bill',
        project_id: 2,
        color0: '16a085',
        color1: '2ecc71',
        color2: 'AEA04B',
        color3: 'E6D690',
        color4: 'CDA434'
      }
    ]
  }
];

const room2 = [
  {
    project_name: 'Room2',
    id: 2,
    palettes: [
      {
        id: 1,
        palette_name: 'Colors',
        project_id: 2,
        color0: '6320ee',
        color1: 'D5f2e3',
        color2: '999950',
        color3: 'C7B446',
        color4: 'C2B078'
      },
      {
        id: 2,
        palette_name: 'Bright',
        project_id: 2,
        color0: '786fa6',
        color1: 'f19066',
        color2: 'FFFF00',
        color3: 'EDFF21',
        color4: 'A98307'
      },
      {
        id: 3,
        palette_name: 'Joker',
        project_id: 2,
        color0: '211a1d',
        color1: '6320ee',
        color2: 'D5f2e3',
        color3: '8075ff',
        color4: '8fc93a'
      },
      {
        id: 4,
        palette_name: 'Russian Flat',
        project_id: 2,
        color0: 'f19066',
        color1: '786fa6',
        color2: 'f19066',
        color3: '786fa6',
        color4: '574b90'
      },
      {
        id: 5,
        palette_name: 'For Bill',
        project_id: 2,
        color0: '16a085',
        color1: '2ecc71',
        color2: 'AEA04B',
        color3: 'E6D690',
        color4: 'CDA434'
      }
    ]
  }
];