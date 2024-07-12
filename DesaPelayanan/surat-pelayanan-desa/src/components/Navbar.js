import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
        <h1>Pelayanan Desa</h1>
        </a>
        <div/>
        <div className="navbar-menu">
        <a href="WordEditor" className="navbar-item">Surat Pengantar</a>
          <a href="#data-penduduk" className="navbar-item">Data Penduduk</a>
          <a href="#data-datang" className="navbar-item">Data Datang</a>
          <a href="#data-pergi" className="navbar-item">Data Pergi</a>
          <a href="#data-perangkat" className="navbar-item">Data Perangkat</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
