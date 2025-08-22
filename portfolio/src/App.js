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
          <p><b>Full stack web developer</b> with 5+ years of professional experience building and deploying scalable web applications with modern JavaScript frameworks. Skilled in the full application lifecycle: design, development, testing, deployment, support, and a passion for solving unique problems.</p>
          <br/>
          <div className="d-flex">
            <a href="/resumeLeahFrye.pdf" target="_blank" rel="noreferrer">
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
          <div className="knowledge">
              <p><b>Languages/Frameworks: </b> <br/> HTML, CSS/SCSS, JavaScript, TypeScript, React, JQuery, Node.js, Python</p>
              <p><b>Backend & Security: </b> <br/> API development, MySQL, SQLite, Sequelize ORM, Passport.js, SharePoint, Auth (SAML, LTI, basic), PII handling, role-based access control (RBAC)</p>
              <p><b>DevOps and Deployment: </b> <br/>Docker, Traefik, Gitlab CI/CD, Linux server management, AWS EC2/S3</p>
              <p><b>AI and Automation Tools: </b> <br/>Grok and Gemini APIs, Microsoft PowerApps and Power Automate</p>
              <p><b>Development Practices: </b> <br/>Test-driven development, debugging, troubleshooting, responsive design, cross-browser compatibility</p>
              <p><b>Design & UX Tools: </b> <br/>Adobe Photoshop, Illustrator, Premiere, wireframing, graphics for web</p>
              <p><b>Additional Skills: </b> <br/>Documentation (wikis, video tutorials), Agile workflow, project management, client communication & support</p>
          </div>
        </div>

        <div className="hr" style={{backgroundImage: `url("gradient.jpg")`}}/>

        <div className="section">
          <h1>Work Experience</h1>

          <h2><b>Information Technology Specialist</b>, Naval Postgraduate School, Department of the Navy</h2>
          <p>Remote | April 2024 – May 2025</p>
          <ul>
            <li>Developed campus-wide business applications using Microsoft Power Platform (PowerApps, Power Automate)</li> 
            <li>Automated and modernized outdated department workflows and web processes</li>
            <li>Created branded, accessible low-code applications aligned with organizational standards</li>
            <li>Optimized and repaired existing workflows; created automation to resolve data integrity issues</li>
            <li>Managed SharePoint data sources and configured access roles in compliance with Least Privilege</li>
            <li>Documented workflows with visual diagrams, tested apps across user roles to ensure proper access</li>
            <li>Collaborated with clients in an Agile workflow to gather requirements and deliver end-to-end solutions</li>
          </ul>

          <h2><b>Web Developer</b>, MKS2 LLC</h2>
          <p>
            Remote | October 2016 – April 2024 | NEC at the Naval Postgraduate School<br/>
            <span className="small-text">* Progressed from front-end to full-stack development over 9 years</span>
          </p>
          
          <ul>
            <li>Developed and maintained full stack applications using Node.js, MySQL, and Sequelize ORM</li> 
            <li>Built RESTful APIs, managed user sessions, and securely stored encrypted credentials</li>
            <li>Created real-time collaborative tools and interactive course modules using WebSockets (Socket.io)</li>
            <li>Designed UI components, maps, and icons using Adobe Photoshop and Illustrator</li>
            <li>Managed WordPress content, customized themes, and developed plugins</li>
            <li>Deployed applications using Docker and Traefik for load balancing and SSL</li>
            <li>Implemented CI/CD pipelines using GitLab Runner, GitLab CI and GitLab API</li>
            <li>Configured authentication systems using SAML, OpenID, LTI, and standard login flows</li>
            <li>Maintained Linux servers, resolved security vulnerabilities, and ensured compliance with IT policies</li>
            <li>Translated UI mockups into responsive, cross-browser-compatible front ends</li>
            <li>Updated campus websites via Liferay and WordPress; built custom faculty sites</li>
            <li>Documented systems, created tutorials, and supported clients directly</li>
          </ul>

          <h2><b>Media Assistant</b>, General Dynamics Information Technology</h2>
          <p>Monterey, CA | April 2015 – October 2016 | CED3 at the Naval Postgraduate School</p>
          <ul>
            <li>Built interactive training tools using jQuery, HTML, and CSS for faculty</li>
            <li>Assisted developers with front-end features using JavaScript, React, and Redux</li>
            <li>Edited and produced multimedia content, including graphics, video, and audio</li>
            <li>Updated and maintained web pages for clients and faculty</li>
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
