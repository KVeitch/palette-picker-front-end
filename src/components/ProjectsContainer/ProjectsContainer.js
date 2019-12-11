import React from 'react';
import Project from '../Project/Project'

function ProjectsContainer(props) {
  const projects = props.projects.map(project => {
    let { palettes, project_name } = project;
    return <Project palettes={palettes} project_name={project_name}/>
  })
  return (
    <section className="section__projects--container">
      {projects}

    </section>
  );
}

export default ProjectsContainer;