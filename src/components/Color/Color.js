import React from 'react';
import './Color.scss';


const Color = (props) => {
  const { main, color1, color2, color3, color4 } = props
  console.log(main)
  return (
    <>
      <div className='outer'>
        <div className='div__color color1' style={{backgroundColor:`#${color1}`}}></div>
        <div className='div__color color2' style={{backgroundColor:`#${color2}`}}></div>
        <div className='div__color color3' style={{backgroundColor:`#${color3}`}}></div>
        <div className='div__color color4' style={{backgroundColor:`#${color4}`}}></div>
        <div className='div__color--main' style={{backgroundColor:`#${main}`}}>
          <p className='div__p--hexcode'>
            #{main}
          </p>
          
        </div>
      </div>
    </>
  )

}

export default Color;