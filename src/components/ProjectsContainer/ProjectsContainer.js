import React from 'react';
import Project from '../Project/Project'

function ProjectsContainer(props) {
  const projects = props.projects.map((project, index) => {
    let { palettes, project_name, id } = project;
    
    return <Project palettes={palettes} project_name={project_name} project_id={id} key={'Project'+ index} removeProject={props.removeProject}/>
  })
  return (
    <section className="section__projects--container">
      {projects}

    </section>
  );
}

export default ProjectsContainer;