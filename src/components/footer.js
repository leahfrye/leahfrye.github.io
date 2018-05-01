import React from 'react'

const Footer = () => (
  <footer>
    <div className="container"  style={{margin: "0 auto"}}>
      <div className="text">This webpage was created with: </div>
      <div className="icon-container">
        <a href="https://reactjs.org/" target="_blank">
          <img src="images/icons/react.png" className="icon" className="icon" data-toggle="tooltip" data-placement="top" title="React"/>
        </a>
        <a href="https://sass-lang.com/" target="_blank">
          <img src="images/icons/sass.png" className="icon" className="icon" data-toggle="tooltip" data-placement="top" title="Sass"/>
        </a>
        <a href="https://getbootstrap.com/" target="_blank">
          <img src="images/icons/bootstrap.svg" className="icon" className="icon" data-toggle="tooltip" data-placement="top" title="Bootstrap"/>
        </a>
      </div>
      </div>
  </footer>
)

export default Footer
