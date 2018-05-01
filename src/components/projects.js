import React from 'react'
import Gallery from "../components/gallery.js";
import { 
  HURRICANE_IMAGES, 
  WARGAMING_IMAGES, 
  FAST_IMAGES, 
  PHOENIX_IMAGES, 
  DRMI_IMAGES, 
  ZEFRA_IMAGES 
} from "../galleries/";

export default class Projects extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projectsOpen: [],
    }
  }
  
  handleShowProjects(name) {    
   let { projectsOpen } = this.state;
    const indexOfProject = projectsOpen.indexOf(name); 
    // If project is not in array, add it
    if (indexOfProject === -1) {
      projectsOpen.push(name);
      this.setState({projectsOpen});
    }
    // If it is in array, remove it
    else {
      projectsOpen.splice(indexOfProject, indexOfProject + 1);
      this.setState({projectsOpen});
    }
  }

  getGallery(name, images) {
    const isHidden = this.state.projectsOpen.indexOf(name);
    const hiddenStyle = {maxHeight: "0px", margin: "0px", transition: "100ms"};
    const visibleStyle = {maxHeight: "900px", transition: "100ms"};
    return (
      <div>
        <div 
            className="row project" 
            style={this.state.projectsOpen.indexOf(name) === -1 ? hiddenStyle : visibleStyle}>
            {images ? <Gallery images={images}/> : <b>Screenshots coming soon.</b>}
          </div> 
        <button 
          type="button" 
          className="btn btn-dark" 
          onClick={() => this.handleShowProjects(name)}>
          Screenshots { isHidden ? <img src="images/icons/arrow-right.svg" className="icon"/> 
          : <img src="images/icons/arrow-up.svg" className="icon"/> }
        </button>
      </div>
    );
  }

  render() {
    
    return (
      <div className="projects">
        <h1>Projects</h1>
        
        <div className="container">
          <h2>Hurricane Decision Simulator V2</h2>
          <p>
            The Hurricane Simulator lets users run through hurricane forecasts and make decisions based on predicted 
            windspeeds and probabilities. The goal is to give users an understanding of the difficulties of making certain 
            decisions, and the unpredictability of hurricanes. 
            <a href="http://drift.nps.edu/staging/hurricane/" target="_blank"> View Simulator</a> and  
            <a href="http://drift.nps.edu/staging/hurricane/selector" target="_blank"> Storm Selector</a>.
          </p>
          <p>
            <b>Uses: </b>JavaScript, TypeScript, NodeJs, React, Redux, Webpack, SCSS, MatLab, Docker<br/>
          </p>
          {this.getGallery("hurricane", HURRICANE_IMAGES)}
        </div>

        <div className="container">
          <h2>Wargaming Activity Hub</h2>
          <p>
            The Wargaming Activity Hub is a website built for the Naval Postgraduate School with the purpose of displaying wargaming 
            information, and allowing faculty to easily update content using the WordPress dashboard. 
            <a href="http://drift.nps.edu/wargaming/" target="_blank"> View website</a>.
          </p>
          <p>
            <b>Uses: </b>WordPress, PhP, JavaScript, jQuery, Docker <br/>
          </p>
          {this.getGallery("wargaming", WARGAMING_IMAGES)}
        </div>

        <div className="container">
          <h2>The Zefra Scenario</h2>
          <p>
            The Zefra scenario is a website that provides the background for a short role-playing game for students. 
            It is used as an example during course discussions about planning and conducting analysis of a seminar war games.
            <i> Website is not available to the public.</i>
          </p>
          <p>
            <b>Uses: </b>JavaScript, TypeScript, NodeJs, React, Redux, Webpack, SCSS, Docker<br/>
          </p>
          {this.getGallery("zefra", ZEFRA_IMAGES)}
        </div>

        <div className="container">
          <h2>FAST Tool</h2>
          <p>
            FAST was created to support aministrative clerks in the Marines and help simplify their tasks. The site allows
            clerks to easily guide other Marines through questions that trigger a list of processes that need to be completed.
            <a href="http://drift.nps.edu/fast/" target="_blank"> View website</a>.
          </p>
          <p>
            <b>Uses: </b>JavaScript, TypeScript, NodeJs, React, Redux, Webpack, Styled Components, Docker <br/>
          </p>
          {this.getGallery("fast", FAST_IMAGES)}
        </div>

        <div className="container">
          <h2>Monterey Phoenix V3</h2>
          <p>
            Monterey Phoenix is a Navy-developed formal language and approach for modeling systems, software, hardware, people, 
            organizational, and/or environmental behaviors and their interactions with one another. This app converts the MP language into 
            a interactive graph, and allows importing and exporting of MP files.
            <a href="http://firebird.nps.edu:3000/" target="_blank"> View App</a>.
          </p>
          <p>
            <b>Uses: </b>JavaScript, TypeScript, NodeJs, React, Redux, Webpack, GoJs, Docker <br/>
          </p>
          {this.getGallery("phoenix", PHOENIX_IMAGES)}
        </div>

        <div className="container">
          <h2>DRMI Accounting Modules</h2>
          <p>
            The DRMI Accounting Modules are part of a free online course provided by the Naval Postgraduate 
            School's Defense Resources Management Institute. The course is made up of a combination of slideshows, videos, and quizzes.
            <a href="http://faculty.nps.edu/dl/DRMI/AccountingModules/" target="_blank"> View Course</a>.
          </p>
          <p>
            <b>Uses: </b>JavaScript, jQuery, HTML, CSS<br/>
          </p>
          {this.getGallery("drmi", DRMI_IMAGES)}
        </div>

        <h2>Personal Projects</h2>
          <ul>
            <li>React example: <a href="https://github.com/leahfrye/markdownPreviewer" target="_blank">Markdown Previewer</a></li>
            <li>React + Redux example: <a href="https://github.com/leahfrye/recipeBox" target="_blank">Recipe box</a></li>
            <li>JavaScript fetch request example: <a href="https://github.com/leahfrye/camperLeaderboard" target="_blank">Camper Leaderboard</a></li>
          </ul>

      <div className="hr"/>
      
    </div>
    );
  }

};

