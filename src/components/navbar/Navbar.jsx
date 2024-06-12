import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { itemsNavbar } from '../data'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [activeButton, setActiveButton] = useState('Home');

  useEffect(() => {
    // Marcar el botón "Home" como activo al inicio
    setActiveButton('Home');
  }, []);

  return (
    <div className='container-nav'>
      <nav>
        <div className='icons-nav'>
          {itemsNavbar.map((item) => (
            <div
            key={item.id}
            className={`icons-map ${activeButton === item.title ? 'active' : ''}`}
          >
            <Link
                to={item.link}
                onClick={() => setActiveButton(item.title)}
              >
                {item.icon}
              </Link>
            </div>
            ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar