import React from 'react';
import './Color.scss';
import { ChromePicker } from 'react-color';
import padlock from '../../images/padlock.svg';
import openPadlock from '../../images/open-padlock.svg';

const Color = props => {
  const { handleColorChange, colors, index, toggleColorLock } = props;
  const icon = colors[0].isLocked ? padlock : openPadlock;
  const locked = colors[0].isLocked ? 'locked' : '';
  return (
    <section>
      <div className='outer'>
        <div
          className='div__color color1'
          style={{ backgroundColor: `#${colors[1].hex}` }}
        ></div>
        <div
          className='div__color color2'
          style={{ backgroundColor: `#${colors[2].hex}` }}
        ></div>
        <div
          className='div__color color3'
          style={{ backgroundColor: `#${colors[3].hex}` }}
        ></div>
        <div
          className='div__color color4'
          style={{ backgroundColor: `#${colors[4].hex}` }}
        ></div>
        <div
          className={`div__color--main ${locked}`}
          style={{ backgroundColor: `#${colors[0].hex}` }}
          onClick={() => toggleColorLock(index)}
        >
          <div className='color__main--info'>
            <p className='div__p--hexcode'>#{colors[0].hex}</p>
            <img
              src={icon}
              className='color__main--lock-img'
              alt=''
              onClick={() => toggleColorLock(index)}
            />
          </div>
        </div>
      </div>
      <ChromePicker
        className='chromePicker'
        color={`#${colors[0].hex}`}
        onChange={({ hex }) => handleColorChange(index, hex)}
      />
    </section>
  );
};

export default Color;
