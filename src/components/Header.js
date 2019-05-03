import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light px-3 py-0">
        <h2 className="p-3 m-0 header">Bruce Harms</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active" href="#home">About</a>
            <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
            <a className="nav-item nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;