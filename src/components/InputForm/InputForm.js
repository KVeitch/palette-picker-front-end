import React, { Component } from 'react';
import './InputForm.scss';

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      projectName: '',
      select: 'new-project',
      currentProject:''      
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePaletteClick = e => {
    e.preventDefault();
    let newPalette = {
      palette_name: this.state.paletteName
    };
    if (newPalette.palette_name !== '') {
      this.props.addPalette(this.state.paletteName);
    }
  };

  handleProjectClick = e => {
    e.preventDefault();
    let newProject = {
      project_name: this.state.projectName
    };
    if (newProject.project_name !== '') {
      this.props.addProject(this.state.projectName);
      this.setState({select: this.state.projectName })
      
    }
  };

  changeProject = async e => {
    e.preventDefault();
    if (e.target.value === 'new-project') {
      this.setState({select: e.target.value });
      // this.props.setCurrentProject(e.target.value)
    } else {
      this.setState({select: e.target.value });
      this.props.setCurrentProject(e.target.value)
    }
  }

  render() {
    const { projects } = this.props
    const { select } = this.state

    const options = projects.map(project => <option key={'option'+project.id} value={project.project_name}>{project.project_name}</option>)
    return (
      <form className='main__form'>
        <select
          className='select-project'
          value={select}
          onChange={this.changeProject}
        >
          <option value='new-project'>Create A New Project</option>
          {options}
        </select>
        {select === 'new-project' ? (
          <div className='form__input--new-project-name'>
            <input
              className='input__project-name'
              type='text'
              placeholder='Project Name'
              name='projectName'
              value={this.state.projectName}
              onChange={this.handleChange}
            />
            <button onClick={this.handleProjectClick}>Save New Project</button>
          </div>
        ) : (
          ''
        )}
        <input
          className='input__palette-name'
          type='text'
          placeholder='Palette Name'
          name='paletteName'
          value={this.state.paletteName}
          onChange={this.handleChange}
        />

        <button onClick={this.handlePaletteClick}>Save Palette</button>
      </form>
    );
  }
}


export default InputForm;