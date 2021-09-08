import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
    <header className="App__header">
      <span className="App__logo-text">ANIME QUOTES</span>
    </header>
    <div class="navbar">
      <Link to="/">
      HOME
      </Link>
      <Link to="/search" class="navbar__link">
      SEARCH
      </Link>
      <Link to="/favourite-list">
      FAVOURITE
      </Link>
    </div>
    </div>
  );
};

export default Nav;