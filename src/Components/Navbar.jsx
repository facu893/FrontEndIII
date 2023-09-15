import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ContextGlobal } from '../Components/utils/global.context.jsx';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav
      style={{ display: 'flex', justifyContent: 'space-evenly', width: 'auto' }}
      className={`navbar ${theme}`}
    >
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button
        style={{
          width:'50px',
          border: '0px',
          borderRadius: '10%',
          boxShadow: '1px -1px 11px 0px rgba(204,204,204,1)',
          color: theme === 'light' ? 'black' : 'yellow', 
          backgroundColor: 'transparent', 
        }}
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;