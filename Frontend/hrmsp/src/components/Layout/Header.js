


import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <nav className='navbar  navbar-expand-lg navbar-dark bg-dark mb-4'>
        <div className="container">
        <Link className="navbar-brand" to="/">PeopleIQ</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarNav">
        <ul className="navbar-nav ms-auto">

        <li className="nav-item">
              
              <Link className="nav-link" to="/">DashboardCard</Link>
            </li>
        <li className="nav-item">
      <Link className='nav-link' to='/employees'>Employee</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to='/departments'>Department</Link>
    </li>

    <li className='nav-item'>
      <Link className='nav-link' to='/leaves'>Leave</Link>
    </li>

    <li className='nav-item'>
      <Link  className='nav-link' to='/projects'>Project</Link>

    </li>

    <li className='nav-item'>
      <Link className='nav-link' to='/login'>Login</Link>
    </li>

    <li>
      </li>
    
  </ul>

        </div>

        </div>
     

        </nav>
        
        </>
      
    
  )
}

export default Header;

