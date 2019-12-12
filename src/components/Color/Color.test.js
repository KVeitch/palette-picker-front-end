import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color', () => {
  let wrapper;
  const color0 = { hex: '4f4f4f', isLocked: false };
  const color1 = { hex: '1c6a77', isLocked: false };
  const color2 = { hex: '678b91', isLocked: false };
  const color3 = { hex: '95e6f4', isLocked: false };
  const color4 = { hex: '2dd0ed', isLocked: false };
  const colors = [color0, color1, color2, color3, color4];
  const mockHandleColorChange = jest.fn();
  const mockToggleColorLock = jest.fn();
  const mockIndex = `color${4 - 1}`;

  beforeEach(() => {
    wrapper = shallow(
      <Color
        colors={[...colors]}
        key={`color` + 1}
        index={mockIndex}
        handleColorChange={mockHandleColorChange}
        toggleColorLock={mockToggleColorLock}
      />
    );
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleColorChange when the color changers', () => {
    let color = { hex: '123123' };
    wrapper.find('.chromePicker').simulate('change', color);
    expect(mockHandleColorChange).toHaveBeenCalledWith(mockIndex, '123123');
  });

  it('should call toggleColorLock when the .div__color--main is clicked', () => {
    wrapper.find('.div__color--main').simulate('click');
    expect(mockToggleColorLock).toHaveBeenCalledWith(mockIndex);
  });
  it('should call toggleColorLock when the .color__main--lock-img is clicked', () => {
    wrapper.find('.color__main--lock-img').simulate('click');
    expect(mockToggleColorLock).toHaveBeenCalledWith(mockIndex);
  });
});

describe('Color colors locked', () => {
  let wrapper;
  const color0 = { hex: '4f4f4f', isLocked: true };
  const color1 = { hex: '1c6a77', isLocked: true };
  const color2 = { hex: '678b91', isLocked: true };
  const color3 = { hex: '95e6f4', isLocked: true };
  const color4 = { hex: '2dd0ed', isLocked: true };
  const colors = [color0, color1, color2, color3, color4];
  const mockHandleColorChange = jest.fn();
  const mockToggleColorLock = jest.fn();
  const mockIndex = `color${4 - 1}`;

  beforeEach(() => {
    wrapper = shallow(
      <Color
        colors={[...colors]}
        key={`color` + 1}
        index={mockIndex}
        handleColorChange={mockHandleColorChange}
        toggleColorLock={mockToggleColorLock}
      />
    );
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
