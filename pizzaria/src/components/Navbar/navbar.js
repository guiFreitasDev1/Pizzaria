import React from 'react';
import "./navbar.css";

const Navbar = () => {

  return (
    <header>
      <nav>
        <h1 className='logo'>Pizzaria</h1>
        <button>&#9776;</button>
        <ul className='nav-list'>
          <li><a href="/">Peça Online</a></li>
          <li><a href="/">Cardápio</a></li>
          <li><a href="/">Promoções</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar