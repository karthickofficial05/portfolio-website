import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className='nav-bar'>
          <li className='portfolio'><a href="#home">Portfolio</a></li>
          <input type='checkbox' id='check' />
          <span className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
          </span>
          <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
