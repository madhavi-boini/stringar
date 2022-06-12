import React from 'react'
import {FaGamepad} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="nav-link"  to="/"><h3><FaGamepad/> Stringar</h3></Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item ">
      <Link className="nav-link"  to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link"  to="/Games">Games</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link"  to="/Explore">Explore</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link"  to="/UserGuide">UserGuide</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link"  to="/ContactUs">Contact Us</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar

