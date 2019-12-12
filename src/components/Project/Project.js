import React from 'react';
import Palette from '../Palette/Palette';
import './Project.scss';
import bin from '../../images/bin.svg';

function Project(props) {
  const { palettes, project_name, project_id, removeProject } = props;
  const displayPalettes = palettes
    ? palettes.map((palette, index) => (
        <Palette palette={palette} key={'palette' + index} />
      ))
    : '';
  return (
    <div className='div__project'>
      <div>
        <h3>{project_name}</h3>
        <img
          className='deleteBtn'
          src={bin}
          alt='delete button'
          onClick={() => removeProject(project_id)}
        />
      </div>
      {displayPalettes}
    </div>
  );
}

export default Project;
