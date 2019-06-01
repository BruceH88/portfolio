import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectCard from "./components/ProjectCard/";
import Portfolio from "./components/Portfolio/";
import Contact from "./components/Contact";
import projects from "./projects.json";
//import Portfolio from './components/Portfolio';

class App extends Component {
  state = {
    projectList: projects,
  };

  openProject = (url) => {
    var win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
        <div>
          <h1>Portfolio</h1>
          <Portfolio>
            {this.state.projectList.map(projectItem => (
              <ProjectCard
                key={projectItem.id}
                id={projectItem.id}
                name={projectItem.name}
                image={projectItem.image}
                url={projectItem.url}
                openProject={this.openProject}
              />
            ))}
          </Portfolio>
        </div>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
