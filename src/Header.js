
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '1rem' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
      </nav>
    </header>
  );
}

export default Header;
