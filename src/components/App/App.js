import React, { Component } from 'react';
import './App.scss';
import Color from '../Color/Color'
import InputForm from '../InputForm/InputForm'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'




class App extends Component {
  constructor() {
    super()
    this.state= {
      user: {id:1, user_name:'Bob'},
      projects: [{project_name: 'Dining Room', project_id:1, 
        palettes:[
          {"id": 1,"palette_name": "Colors","project_id": 1,"color0": "6320ee","color1": "D5f2e3","color2": "999950","color3": "C7B446","color4": "C2B078"},
          {"id": 2,"palette_name": "Bright","project_id": 1,"color0": "786fa6","color1": "f19066","color2": "FFFF00","color3": "EDFF21","color4": "A98307"},
          {"id": 3,"palette_name": "Joker","project_id": 1,"color0": "211a1d","color1": "6320ee","color2": "D5f2e3","color3": "8075ff","color4": "8fc93a"},
          {"id": 4,"palette_name": "Russian Flat","project_id": 1,"color0": "f19066","color1": "786fa6","color2": "f19066","color3": "786fa6","color4": "574b90"},
          {"id": 5,"palette_name": "For Bill","project_id": 1,"color0": "16a085","color1": "2ecc71","color2": "AEA04B","color3": "E6D690","color4": "CDA434"}
        ]}],
      currentProjectId: null,
      color0: { hex:'4f4f4f', isLocked:false},
      color1: { hex:'1c6a77', isLocked:false},
      color2: { hex:'678b91', isLocked:false},
      color3: { hex:'95e6f4', isLocked:false},
      color4: { hex:'2dd0ed', isLocked:false}
    }
  }
  componentDidMount = () => {
    this.getStartingColors()
  }

  generateColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  getStartingColors = () => {
    this.setState({
      color0: { hex:this.generateColor(), isLocked:false},
      color1: { hex:this.generateColor(), isLocked:false},
      color2: { hex:this.generateColor(), isLocked:false},
      color3: { hex:this.generateColor(), isLocked:false},
      color4: { hex:this.generateColor(), isLocked:false}
    })
  }

  getColors = () => {
    let { color0, color1, color2, color3, color4 } = this.state;
    let colors =[color0, color1, color2, color3, color4];
    colors.forEach(color => {
      if (!color.isLocked) color.hex = this.generateColor(); 
    })
    this.setState({color0, color1, color2, color3, color4})
  }

  handleColorChange = (index, hex) =>{
    let { isLocked } = this.state[index];
    this.setState({ [index]: {hex: hex.substring(1), isLocked } })
  }

  toggleColorLock = (index) => {
    let { hex, isLocked} = this.state[index];
    console.log(hex,isLocked, index)
    isLocked = !isLocked;
    this.setState({[index]: {hex, isLocked } })
  }

  render = () =>{
    const { color0,color1,color2,color3,color4, projects } = this.state;
    const colors = [color0,color1,color2,color3,color4]
    const displayColors = colors.map((color, i)=>{
      colors.unshift(...colors.splice(-1));
      return <Color 
      colors={[...colors]}
      key={`color`+i}
      index={`color${4-i}`}
      handleColorChange={this.handleColorChange}
      toggleColorLock={this.toggleColorLock}/>
    })
    return (
      <div className="App">
        <nav><h1><span className="page__title">Some Title</span></h1>    Login</nav>
        <main>
          {displayColors}
        </main>
        <button type='button' 
        onClick={this.getColors}
        >Generate New Palette</button>
        <InputForm projects={projects} key={'inputForm'}/>
        {/* need function to edit and delete projects and palettes */}
        <ProjectsContainer projects={projects} key={'projectsContinaer'}/> 
      </div>
    )};

}

export default App;
