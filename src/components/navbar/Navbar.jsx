import React from 'react'
import './Navbar.css'
import { itemsNavbar } from '../data'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='container-nav'>
      <nav>
        <div className='icons-nav'>
          {itemsNavbar.map((item) => (
            <div key={item.id} className='icons-map'>
            <Link to={item.link}>{item.icon}</Link>
            </div>
            ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar