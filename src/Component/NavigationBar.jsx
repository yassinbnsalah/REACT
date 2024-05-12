import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
    <NavLink  to="/" activeStyle={{ fontWeight: 'bold', textDecoration: 'underline' }}>
      Home
    </NavLink>
      
    <NavLink to="/competitions" activeStyle={{ fontWeight: 'bold', textDecoration: 'underline' }}>
      Competitions
    </NavLink>
       
      </ul>
   
    </div>
  </div>
</nav>

  </div>
  )
}

export default NavigationBar
