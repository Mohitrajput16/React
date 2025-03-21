import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  let navlink={
    color:"white"
  }
  
  return (
      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" style={navlink} href="#">{props.title}</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mx-5" style={navlink} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={navlink} href="/About">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "your title"
}

Header.propTypes = {
  title: PropTypes.string
}
