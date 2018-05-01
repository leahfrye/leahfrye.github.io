import React from 'react'

const Header = () => (
  <div className="header">
    <div className="container" style={{maxWidth: 960, }}>
      
      <h1>Leah Frye</h1>
      <p>
        <b>Front End Web Developer</b> with 2 years of professional experience developing React + Redux 
        applications, and 3 years of experience using HTML, CSS, and JavaScript to create websites. Strong 
        desire to learn new tools and techniques for solving problems, and a passion for creating 
        responsive, accessible user interfaces.
      </p>

      <div className="row profiles">
        <a href="https://docs.google.com/document/d/1te8PdYs1pIMSeIUIvb9B-mgmqgW2UHk4I6w0y3Ko4YY/edit?usp=sharing" target="_blank">
          <button type="button" className="btn btn-dark">
            <img className="icon-small" src="/images/google-docs.svg"/> Resume
          </button>
        </a>
        <a href="https://www.linkedin.com/in/leah-frye-29741093/" target="_blank">
          <button type="button" className="btn btn-dark">
            <img className="icon-small" src="/images/linkedin.svg"/> LinkedIn
          </button>
        </a>
        <a href="https://github.com/leahfrye" target="_blank">
          <button type="button" className="btn btn-dark">
            <img className="icon-small" src="/images/github.svg"/> Github
          </button>
        </a>
      </div>
    
    </div>
  </div>
)

export default Header
