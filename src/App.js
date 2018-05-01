import React, { Component } from 'react';

import Education from "./components/education";
import Footer from "./components/footer";
import Header from "./components/header";
import Knowledge from "./components/knowledge";
import Projects from "./components/projects";
import WorkExperience from "./components/workExperience";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div style={{margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,}}>
          <Knowledge/>
          <WorkExperience/>
          <Projects/>
          <Education/>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
