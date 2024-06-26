import React from 'react';
import logoImage from '../components/assets/Logo.svg';
import '../components/littlelemon.css'


export const Nav = () => {
  return (
    <nav>
      <div className="logo">
      <img src={logoImage} alt="Logo" />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}
