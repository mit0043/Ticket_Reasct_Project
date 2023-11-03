import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/home" className='nav-link'>Home</Link>
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
      </li>
      <li className="nav-item">
        <Link to="/department" className='nav-link'>Department</Link>
        {/* <a class="nav-link" href="#">Features</a> */}
      </li>
      <li className="nav-item">
        <Link to="/user" className='nav-link'>User</Link>
      </li>
      <li className="nav-item">
      < Link to="/ticket" className='nav-link'>Ticket</Link>
      </li>
      <li className="nav-item">
      < Link to="/ticket_book" className='nav-link'>Ticket Book</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header