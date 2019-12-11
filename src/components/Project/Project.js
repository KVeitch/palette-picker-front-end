import React from 'react';
import Palette from '../Palette/Palette'
import './Project.scss'
import bin from '../../images/bin.svg'

function Project(props) {

  const { palettes, project_name} = props
  const displayPalettes = palettes.map((palette,index) =><Palette palette={palette} key={'palette' + index}/>)
  return (
    <div className="div__project">
      <div>
        <h3>{project_name}</h3><img className='deleteBtn' src={bin} alt='delete button'/>
      </div>
      {displayPalettes}
    </div>
  );
}

export default Project;