import React from 'react'

const Knowledge = () => (
  <div className="container knowledge-container">
    <h1>Knowledge</h1>
    
    <div className="knowledge legend">
      <span className="years-experience">X</span>= Years of experience
    </div>

    <div className="row knowledge">

      <div className="col-md-3">
        <ul>
          <li><span className="years-experience">4</span>HTML</li>
          <li><span className="years-experience">4</span>CSS/SCSS</li>
          <li><span className="years-experience">4</span>PhotoShop</li>
          <li><span className="years-experience">4</span>Illustrator</li>
          <li><span className="years-experience">3</span>JavaScript</li>
        </ul>
      </div>

      <div className="col-md-3">
        <ul>
          <li><span className="years-experience">3</span>jQuery</li>
          <li><span className="years-experience">3</span>Bootstrap</li>
          <li><span className="years-experience">2</span>Node</li>
          <li><span className="years-experience">2</span>React + Redux</li>
          <li><span className="years-experience">2</span>ES6</li>          
        </ul>
      </div>

      <div className="col-md-3">
        <ul>
          <li><span className="years-experience">2</span>TypeScript</li>
          <li><span className="years-experience">2</span>WordPress</li> 
          <li><span className="years-experience">2</span>Git</li>
          <li><span className="years-experience">1</span>Express</li>
          <li><span className="years-experience">1</span>Linux</li>            
        </ul>
      </div>

      <div className="col-md-3">
        <ul>
          <li><span className="years-experience">1</span>Docker</li>
          <li><span className="years-experience">1</span>Webpack</li>
          <li><span className="years-experience">1</span>SSH, FTP</li>
          <li><span className="years-experience">> 1</span>PhP</li>
          <li><span className="years-experience">> 1</span>Python</li>
        </ul>
      </div>
    </div>

    <h2>Misc</h2>
    <ul style={{paddingLeft: "20px"}}>
      <li>Responsive Design</li>
      <li>Browser compatibility</li>
      <li>Test-driven development</li>
      <li>Debugging</li>
      <li>Creating mockups and wireframes</li>
      <li>Managing remote servers</li>
      <li>Creating and updating documentation and tutorials</li>
      <li>Agile Development</li>
      <li>Graphic design</li>
    </ul>
    <div className="hr"/>

  </div>
)

export default Knowledge