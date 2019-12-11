import React from 'react';
import './Palette.scss'


function Palette(props) {
  const {palette_name, color0, color1, color2, color3, color4} = props.palette
  const colors = [color0, color1, color2, color3, color4]

  const displayColors = colors.map(color => {
    return(<div className="palette__color" style={{backgroundColor:`#${color}`}}> 
      </div>)
  }) 


  return (
    <div className="palette__container">
      <div className="palette__container--name">
        {palette_name}
      </div>
      {displayColors}
    </div>
  );
}

export default Palette;

