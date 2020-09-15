import React, {Component} from 'react';
import Portfolio from "./Portfolio/Portfolio"
import './App.css';
import {about} from "./Constants/About"
import {skills} from "./Constants/Skillslist"
import {projects} from "./Constants/ProjectsList"
import Paraticles from "react-particles-js"
import Particles from 'react-particles-js';

class App extends Component{
  constructor(){
    super();
    this.state={
      selectedSection: "",
      selectedHeading:"",
      selectedQuote:"",
      about:null,
      skills:null,
      projects:null
      
    }
  }

  componentDidMount(){
    this.setState({
      selectedSection:"about",
      about,
      skills,
      projects,
      selectedHeading: about.heading,
      selectedQuote:about.quote
    })
  }

  handleSectionClick = (section) => {
    this.setState({
      selectedSection:section,
      selectedHeading: this.state[section].heading,
      selectedQuote:this.state[section].quote,
    })
  
  }
  
  render(){
    return (
     <div>
        <div className="App">
        
        <Portfolio 
        about={this.state.about}
        skills={this.state.skills}
        projects={this.state.projects}
        selectedHeading={this.state.selectedHeading}
        selectedQuote={this.state.selectedQuote}
        selectedSection={this.state.selectedSection}
        
        handleSectionClick ={this.handleSectionClick}/>
     
     
      </div>
      <div className="body">
      <Particles type="cirlces" radius={2} g={0} num={0} bg={false}/>
      </div>

     </div>   
     
    );
  }
  
}

export default App;
