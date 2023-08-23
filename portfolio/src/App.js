import { useState } from "react";

import Gallery from "./gallery";

const mpImages = [
  "screenshots/mp_user_dashboard.png", 
  "screenshots/mp_import.png", 
  "screenshots/mp_project_settings.png", 
  "screenshots/mp_project_view.png"
];

const fastImages = [
  "screenshots/fast_main.png",
  "screenshots/fast_process.png",
  "screenshots/fast_process_complete.png",
  "screenshots/fast_checklist"
];

const caseStudyImages = [
  "screenshots/case_study_dashboard.png",
  "screenshots/case_study_sharing.png",
  "screenshots/case_study_case_view.png",
  "screenshots/case_study_text_editor.png",
  "screenshots/case_study_text_questions.png",
  "screenshots/case_study_text_questions.png",
  "screenshots/case_study_manage_users.png"
];

function App() {

  const [selectedProject, setSelectedProject] = useState("");

  const handleSetSelectedProject = (projectName) => {
    setSelectedProject(selectedProject === projectName ? "" : projectName);
  }

  return (
    <div className="App">
      <div className="header" style={{backgroundImage: `url("gradient.jpg")`}}>
        <div className="container">
          <h1>Leah Frye</h1>
          <br/>
          <p><b>Full stack web developer</b> with 7 years of professional experience developing frontend React applications, 4 years developing Node backends, and a passion for solving unique problems.</p>
          <br/>
          <div className="d-flex">
            <a href="https://docs.google.com/document/d/1te8PdYs1pIMSeIUIvb9B-mgmqgW2UHk4I6w0y3Ko4YY/edit?usp=sharing" target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-dark">
              <i className="bi bi-file-earmark-text"/> Resume
              </button>
            </a>
            <a href="https://www.linkedin.com/in/leah-frye-29741093/" target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-dark">
              <i className="bi bi-linkedin"/> LinkedIn</button>
            </a>
            <a href="https://github.com/leahfrye" target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-dark">
              <i className="bi bi-github"/> Github</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="section">
          <h1>Knowledge</h1>
          <div className="row knowledge">
            <div className="col">
              <ul>
                <li>JavaScript/TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>JQuery</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Express.js</li>
                <li>Sequelize</li>
                <li>MySQL</li>
                <li>Socket.IO</li>
                <li>Passport.js</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Docker</li>
                <li>Git</li>
                <li>Linux</li>
                <li>Traefik</li>
                <li>SSH, HTTPS</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Gitlab Runner + CI/CD</li>
                <li>Auth (SAML, LTI, basic)</li>
                <li>Photoshop, Illustrator</li>
              </ul>
            </div>
          </div>

          <h2>Misc</h2>
          <ul>
            <li>Responsive and mobile-first design</li>
            <li>Browser compatibility</li>
            <li>Test-driven development</li>
            <li>Creating mockups, wireframes and color schemes</li>
            <li>Managing and deploying to remote servers</li>
            <li>Installing and managing SSL certificates</li>
            <li>Managing user sessions</li>
            <li>Creating documentation and tutorials</li>
            <li>Agile development</li>
          </ul>
        </div>

        <div className="hr" style={{backgroundImage: `url("gradient.jpg")`}}/>

        <div className="section">
          <h1>Work Experience</h1>

          <h2><b>Web Developer</b>, MKS2 LLC</h2>
          <p>Remote | June 2018 – July 2023 | NEC at the Naval Postgraduate School</p>
          <ul>
            <li>Communicate with the team daily using Microsoft Teams, Zoom, and email</li> 
            <li>Collaborate with developers using Jira, Trello, and other project-management tools</li>
            <li>Manage projects, meet with clients, attend intake meetings and estimate project requirements</li>
            <li>Manage servers, work with IT department to fix security vulnerabilities and ensure applications remain up-to-date with security standards</li>
            <li>Use Adobe Photoshop and Illustrator to create application mockups, icons and graphics</li>
            <li>Develop and maintain backends using NodeJS</li>
            <li>Create and manage databases using MySQL and Sequelize ORM</li>
            <li>Write APIs, manage user sessions and securely store encrypted credentials</li>
            <li>Develop interactive course modules, maps, and graphs</li>
            <li>Create real-time collaborative tools using Socket.IO</li>
            <li>Write documentation and create video tutorials for users and developers</li>
            <li>Develop themes, manage content, and customize plugins for WordPress</li>
            <li>Create Docker images and containers using Dockerfiles and docker-compose</li>
            <li>Setup and maintain Traefik load balancers</li>
            <li>Set up automatic testing via Gitlab CI/CD</li>
            <li>Use SAML, OpenID, LTI, and basic logins for user account authorization</li>
          </ul>

          <h2><b>Web Developer</b>, General Dynamics Information Technology</h2>
          <p>Monterey, CA | October 2016 – April 2018 | CED3 at the Naval Postgraduate School</p>
          <ul>
            <li>Created applications using JavaScript, NodeJs, React, Redux, WordPress, HTML, CSS, and other web development tools</li>
            <li>Supported existing applications, wrote tests, and debugged code</li>
            <li>Pushed updates to Linux servers and used Docker to manage apps, performed troubleshooting on servers when needed</li>
            <li>Created functional products from graphical prototypes provided by the UI designer</li>
            <li>Utilize responsive design and ensure browser compatibility</li>
            <li>Worked alongside the UI designer to QA/QC web apps and perform fixes</li>
            <li>Created and updated NPS web pages using Liferay and WordPress CMS</li>
            <li>Designed and created websites for campus faculty and organizations</li>
          </ul>

          <h2><b>Media Assistant</b>, General Dynamics Information Technology</h2>
          <p>Monterey, CA | April 2015 – October 2016 | CED3 at the Naval Postgraduate School</p>
          <ul>
            <li>Supported faculty and instructional designers with production of course materials and online content</li>
            <li>Designed and developed interactive web tools for use in training courses using JQuery, HTML and CSS</li>
            <li>Assisted web developers by using JavaScript, React and Redux to help build web applications </li>
            <li>Collaborated with lead graphic designer to create and revise graphics</li>
            <li>Edited and exported audio, video, and other media</li>
            <li>Created and updated client and faculty webpages</li>
          </ul>
        </div>


        <div className="hr" style={{backgroundImage: `url("gradient.jpg")`}}/>

      <div className="section projects">
        <h1>Projects</h1>

        <div className="container">
          <h2>Monterey Phoenix v3</h2>
          <p>
            Monterey Phoenix (MP) is a Navy-developed language, approach, and tool for modeling and reasoning about system and process behaviors.
            The <a href="https://firebird.nps.edu/" target="__blank">Monterey Phoenix application</a> acts as an interface to create, compile, and view the output of MP models.
            It also includes a user dashboard for saving, sharing, and collaborating in real-time with other users.
          </p>
          <p><b>Built with: </b>TypeScript, React, Redux, Node, Express, Sequelize, MySQL, Docker, OpenID, Gitlab API</p>
          
          <Gallery images={mpImages} isVisible={selectedProject === "mp"}/>
          
          <button type="button" className="btn btn-dark" onClick={() => handleSetSelectedProject("mp")}>
            <span>Screenshots</span> <i className={`bi ${selectedProject === "mp" ? "bi-caret-up" : "bi-caret-right"}`}/>
          </button>
        </div>

        <div className="container">
          <h2>FAST</h2>
          <p>
            The FAST application guides Marine administrative clerks through dynamic questions that output a PDF checklist of administrative tasks. Users can save sessions to review later, change answers and download updated PDF checklists.
          </p>
          <p><b>Built with: </b>TypeScript, React, Redux, Styled Components, Node, Express, Sequelize, Postgres, Puppeteer, Docker</p>
          
          <Gallery images={fastImages} isVisible={selectedProject === "fast"}/>

          <button className="btn btn-dark" onClick={() => handleSetSelectedProject("fast")}>
            Screenshots <i className={`bi ${selectedProject === "fast" ? "bi-caret-up" : "bi-caret-right"}`}/>
          </button>
        </div>

        <div className="container">
          <h2>Hurricane Decision Simulator</h2>
          <p>
            This <a href="https://hurricane.mfr.nps.edu/" target="__blank">simulator</a> (and <a href="https://hurricane.mfr.nps.edu/selector/" target="__blank">storm selector</a>) provides users with practice making critical hurricane-preparation decisions and interpreting tropical-storm forecasts.
            Users can make decisions that affect announcements, damage outcomes and other decisions in the future.
          </p>
          <p><b>Built with: </b> TypeScript, React, Redux, Node, Express, Sequelize, MySQL, Docker</p>
        </div>

        <div className="container">
          <h2>Case Study Builder</h2>
          <p>
            This application allows instructors to create online case studies to streamline group case study events.
            Instructors can create pages, questions, upload documents, and branch to other pages depending on student answers.
            Additional features include pausing case studies, sharing with other instructors, copying existing case studies, page timing, viewing/downloading results, and user accounts/sessions to store progress. 
          </p>
          <p><b>Built with: </b> TypeScript, React, Node, Express, Sequelize, MySQL, Docker</p>

          <Gallery images={caseStudyImages} isVisible={selectedProject === "case_study"}/>

          <button className="btn btn-dark" onClick={() => handleSetSelectedProject("case_study")}>
            Screenshots <i className={`bi ${selectedProject === "case_study" ? "bi-caret-up" : "bi-caret-right"}`}/>
          </button>
        </div>

        <div className="container">
          <h2>NWC Map Editor</h2>
          <p>
            This <a href="https://faculty.nps.edu/dl/imes/nwc/" target="__blank">map editor</a> was built for the Naval War College to replace physical map-building exercises. 
            Users can add shapes, custom SVG icons, change colors, draw lines, and download images/PDFs or JSON map data.
          </p>
          <p><b>Built with: </b>JavaScript, Leaflet</p>
        </div>

        <div className="container">
          <h2>Zefra Scenario Website</h2>
          <p>
            The <a href="https://drift.nps.edu/wargaming/zefra" target="__blank">Zefra Scenario</a> is a fictional wargaming exercise built to support in-person courses. The website is purely informational with some interactivity. 
          </p>
          <p><b>Built with: </b>TypeScript, React</p>
        </div>

      </div>

      <div className="hr" style={{backgroundImage: `url("gradient.jpg")`}}/>

      <div className="section">
      <h1>Education & Certification</h1>
        <ul>
          <li>
            <b>California State University, Chico</b><br/>
            B.S. in Applied Computer Graphics - August 2012 - May 2014
          </li>
          <li>
            <b>AWS Certified Cloud Practitioner</b><br/>
            Valid until October 2025
          </li>
        </ul>
      </div>

      </div>

    </div>
  );
}

export default App;
