import React, { Component } from 'react';
import './App.scss';
import Color from '../Color/Color'
import InputForm from '../InputForm/InputForm'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'

class App extends Component {
  constructor() {
    super()
    this.state= {
      user: {},
      projects: [{project_name: 'Dining Room', project_id:1}],
      currentProjectId: null,
      color0: '0000ff',
      color1: 'FFFF00',
      color2: 'FF0000',
      color3: '00ff00',
      color4: 'ff00ff'
    }
  }

  render = () =>{
  const { color0,color1,color2,color3,color4, projects } = this.state;
  return (
    <div className="App">
      <nav><h1><span className="page__title">Some Title</span></h1>    Login</nav>
      <main>
        <Color main={color0} color1={color1} color2={color2} color3={color3} color4={color4}/>
        <Color main={color1} color1={color2} color2={color3} color3={color4} color4={color0}/>
        <Color main={color2} color1={color3} color2={color4} color3={color0} color4={color1}/>
        <Color main={color3} color1={color4} color2={color0} color3={color1} color4={color2}/>
        <Color main={color4} color1={color0} color2={color1} color3={color2} color4={color3}/>
      </main>
      <InputForm projects={projects}/>
      {/* need function to edit and delete projects and palettes */}
      <ProjectsContainer projects={projects}/> 
    </div>
  )};
}

export default App;
